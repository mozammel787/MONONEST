import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { useAuth } from '../Hook/useAuth';

// Load Stripe with public key
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Checkout = () => {
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  const { totalAmount, cartItems } = useSelector((state) => state.cart);

  // Fetch client secret from backend
  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch(`${API_URL}/create-payment-intent`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({ price: totalAmount }), // Send the amount
        });
        const data = await response.json();
        setClientSecret(data.clientSecret); // Set the clientSecret
      } catch (error) {
        setError(error.message);
      }
    };

    if (totalAmount > 0) {
      fetchClientSecret(); // Fetch client secret only if there's a total amount
    }
  }, [totalAmount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const stripe = useStripe();
    const elements = useElements();

    if (!stripe || !elements) {
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user?.displayName || 'Anonymous',
            email: user?.email || 'anonymous@example.com',
          },
        },
      });

      if (error) {
        setError(error.message);
      } else if (paymentIntent.status === 'succeeded') {
        // Save order details to the backend
        await fetch(`${API_URL}/payment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({
            paymentIntentId: paymentIntent.id,
            customerEmail: user?.email,
            items: cartItems,
            totalAmount,
          }),
        });
        navigate('/complete-order');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-semibold my-5">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <CardElement className="p-2 border rounded w-full" />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={!stripePromise || processing}
          className="btn btn-neutral w-full shadow-xl text-gray-50"
        >
          {processing ? 'Processing...' : 'Complete Order'}
        </button>
      </form>
    </div>
  );
};

const WrappedCheckout = () => (
  <Elements stripe={stripePromise}>
    <Checkout />
  </Elements>
);

export default WrappedCheckout;
