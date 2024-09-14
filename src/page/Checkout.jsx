// src/components/CheckoutPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  const { totalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch(`${API_URL}/create-payment-intent`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ price: totalAmount }),
        });
        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        setError(error.message);
      }
    };

    if (totalAmount > 0) {
      fetchClientSecret();
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
            name: 'Customer Name', // Replace with actual customer name
          },
        },
      });

      if (error) {
        setError(error.message);
      } else if (paymentIntent.status === 'succeeded') {
        // Save order details to the backend
        await fetch(`${API_URL}/payment`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            paymentIntentId: paymentIntent.id,
            customerEmail: 'customer@example.com', // Replace with actual customer email
            items: [], // Replace with actual purchased items
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
    <div className='container mx-auto'>
      <h1 className='text-4xl font-semibold my-5'>Checkout</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <CardElement className='p-2 border rounded w-full' />
        {error && <p className='text-red-500'>{error}</p>}
        <button
          type="submit"
          // disabled={!stripe || processing}
          className='btn btn-neutral w-full shadow-xl text-gray-50'
        >
          {processing ? 'Processing...' : 'Complete Order'}
        </button>
      </form>
    </div>
  );
};

const WrappedCheckoutPage = () => (
  <Elements stripe={stripePromise}>
    <CheckoutPage />
  </Elements>
);

export default WrappedCheckoutPage;
