import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/cartSlice';
import { RiDeleteBin2Line } from 'react-icons/ri';

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems, totalAmount, totalItems } = useSelector((state) => state.cart);

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className=' mx-auto max-w-4xl '>
            <h1 className='text-5xl font-semibold my-5 text-center'>Cart</h1>
            <div className='flex justify-between items-center gap-6 w-full max-w-2xl mx-auto my-10'>
                <div className='flex items-center justify-between gap-6 font-medium border-b-2 border-neutral pb-3  '>
                    <h1 className='text-xl  rounded-full bg-neutral text-white h-10 w-10 flex items-center justify-center'>1</h1>
                    <p>Shopping cart</p>
                </div>
                <div className='flex items-center justify-between gap-6 font-medium border-b-2 border-gray-200 pb-3  text-gray-200'>
                    <h1 className='text-xl  rounded-full bg-gray-200 text-white h-10 w-10 flex items-center justify-center'>2</h1>
                    <p>Checkout details</p>
                </div>
                <div className='flex items-center justify-between gap-6 font-medium border-b-2 border-gray-200 pb-3 text-gray-200 '>
                    <h1 className='text-xl  rounded-full bg-gray-200 text-white h-10 w-10 flex items-center justify-center'>3</h1>
                    <p>Order complete</p>
                </div>
            </div>
            <div className='rounded shadow border p-6'>
                {cartItems.length === 0 ? (
                    <p className='text-lg'>Your cart is empty</p>
                ) : (
                    <div>
                        <ul className='space-y-4 '>
                            {cartItems.map((item) => (
                                <li key={item.id} className=' p-4 border-b'>
                                    <div className='flex items-center justify-between'>
                                        <img src={item.images[0]} alt={item.name} className='w-20 h-20 object-cover rounded' />
                                        <div className='flex-1 ml-4'>
                                            <h2 className='text-xl font-semibold'>{item.name}</h2>
                                            <p className='text-lg font-medium'>${item.price}</p>
                                            <div className='inline-flex items-center mt-2 bg-gray-200 rounded'>
                                                <button
                                                    onClick={() => handleDecrement(item.id)}
                                                    className='px-3 py-1  rounded-md hover:bg-neutral hover:text-white'
                                                >
                                                    -
                                                </button>
                                                <span className='mx-4'>{item.quantity}</span>
                                                <button
                                                    onClick={() => handleIncrement(item.id)}
                                                    className='px-3 py-1  rounded-md hover:bg-neutral hover:text-white'
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="btn btn-circle bg-gray-100 border-0 shadow text-xl">
                                            <RiDeleteBin2Line ></RiDeleteBin2Line>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className='mt-6  pt-4'>
                            <h2 className='text-3xl font-semibold'>Total</h2>
                            <p className='text-xl'>Total Items: {totalItems}</p>
                            <p className='text-xl'>Total Amount: ${totalAmount.toFixed(2)}</p>
                            <button
                                onClick={handleCheckout}
                                className='mt-4 btn btn-neutral w-full shadow-xl text-gray-50'
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
