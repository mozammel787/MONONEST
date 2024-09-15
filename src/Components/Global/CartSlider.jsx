import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../store/cartSlice';
import Cardlidt from './Cardlidt';
import { Link } from 'react-router-dom';

const CartSlider = () => {
    const dispatch = useDispatch();
    const { cartItems, totalAmount } = useSelector((state) => state.cart);
    // console.log(cartItems);

    return (
        <div className="drawer drawer-end z-50">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item z-0">{cartItems.length}</span>
                        </div>
                    </div>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu text-base-content min-h-full w-80 p-4 z-auto bg-white">
                    <div className="flex flex-col space-y-4 text-gray-800">
                        <h2 className="text-xl font-semibold">Your cart</h2>
                        <ul className="flex flex-col divide-y divide-gray-300">
                            {cartItems.map((item) => (
                                <Cardlidt key={item.id} item={item} />
                            ))}
                        </ul>

                        <p className='flex justify-between items-center text-lg'>Total amount: <span className="font-semibold">${totalAmount.toFixed(2)}</span></p>

                        <hr className='hr w-full rounded-none' />
                        <Link to={'/cart'} type="button" className=" btn btn-neutral ">
                        View Cart
                        </Link>

                    </div>
                </ul>
            </div>
        </div>
    );
};

export default CartSlider;
