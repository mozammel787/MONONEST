import React from 'react';
import { CgCheck } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const CompleteOrder = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('dashboard/orders');
  };

  return (
    <div className=' mx-auto max-w-4xl'>
      <h1 className='text-5xl font-semibold my-5 text-center'>Checkout</h1>
      <div className='flex justify-between items-center gap-6 w-full max-w-2xl mx-auto my-10'>
        <div className='flex items-center justify-between gap-6 font-medium border-b-2 border-green-500 pb-3 text-green-500 '>
          <h1 className='text-3xl  rounded-full bg-green-500 text-white h-10 w-10 flex items-center justify-center'><CgCheck /></h1>
          <p>Shopping cart</p>
        </div>
        <div className='flex items-center justify-between gap-6 font-medium border-b-2 border-green-500 pb-3 text-green-500 '>
          <h1 className='text-3xl  rounded-full bg-green-500 text-white h-10 w-10 flex items-center justify-center'><CgCheck /></h1>
          <p>Checkout details</p>
        </div>
        <div className='flex items-center justify-between gap-6 font-medium border-b-2 border-green-500 pb-3 text-green-500 '>
          <h1 className='text-3xl  rounded-full bg-green-500 text-white h-10 w-10 flex items-center justify-center'><CgCheck /></h1>
          <p>Order complete</p>
        </div>
      </div>
      <div className=' p-10 shadow rounded max-w-2xl mx-auto my-10 space-y-10'>

        <p className='text-2xl text-gray-400 font-semibold text-center'>Thank you! 🎉</p>
        <h3 className='text-5xl  font-semibold text-center'>Your order has been received</h3>
        <button
          onClick={handleContinueShopping}
          className='mt-4 btn btn-neutral w-full shadow-xl text-gray-50'
        >
          Purchase history
        </button>
      </div>
    </div>
  );
};

export default CompleteOrder;
