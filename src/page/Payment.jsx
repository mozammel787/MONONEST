import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';

// Load Stripe with public key
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Payment = ({ userInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  const { totalAmount, cartItems } = useSelector((state) => state.cart);

  // console.log(userInfo);

  // Fetch client secret from backend
  useEffect(() => {

    fetch(`${API_URL}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price: totalAmount }), // Send the amount
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));

  }, [totalAmount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
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
      } else if (paymentIntent.status === 'succeeded') {

        await fetch(`${API_URL}/payment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
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


        dispatch(clearCart());

        // Clear local storage
        localStorage.removeItem('cart');
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
      <h2 className="text-xl font-semibold my-6">Payment method</h2>
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

export default Payment;
