import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice'; // Adjust the import path

// Load Stripe with public key from environment variable
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Payment = ({ userInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize the dispatcher
  const { totalAmount, cartItems } = useSelector((state) => state.cart);

  // Fetch client secret from backend
  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch(`${API_URL}/create-payment-intent`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({ price: totalAmount }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          throw new Error('Client secret was not returned');
        }
      } catch (err) {
        console.error('Error fetching client secret:', err);
        setError('Failed to retrieve payment details.');
      }
    };

    fetchClientSecret();
  }, [totalAmount]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      setError('Stripe has not yet loaded.');
      setProcessing(false);
      return;
    }

    if (!clientSecret) {
      setError('Client secret is not available.');
      setProcessing(false);
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: userInfo?.displayName || 'Anonymous',
            email: userInfo?.email || 'anonymous@example.com',
          },
        },
      });

      if (error) {
        setError(error.message);
        setProcessing(false);
        return;
      }

      if (paymentIntent.status === 'succeeded') {
        await fetch(`${API_URL}/payment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({
            paymentIntentId: paymentIntent.id,
            customerEmail: userInfo?.email,
            customerNumber: userInfo?.phoneNumber,
            customerAddress: userInfo?.address,
            items: cartItems,
            totalAmount,
          }),
        });

        // Clear cart in Redux
        dispatch(clearCart());

        // Clear local storage
        localStorage.removeItem('cart');

        navigate('/complete-order');
      }
    } catch (error) {
      setError('Payment failed.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-semibold my-6">Payment Method</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <CardElement className="p-2 border rounded w-full" />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="btn btn-neutral w-full shadow-xl text-gray-50"
        >
          {processing ? 'Processing...' : 'Complete Order'}
        </button>
      </form>
    </div>
  );
};

export default Payment;
