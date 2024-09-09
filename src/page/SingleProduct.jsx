import React, { useState } from 'react';
import Hero1 from "../assets/LivingRoom.png";
import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const SingleProduct = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    };
    return (
        <div className='container mx-auto'>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li className='text-gray-500'><a>Home</a></li>
                    <li className='text-gray-500'><a>Shop</a></li>
                    <li className='text-gray-500'>Living Room</li>
                    <li>Tray Table</li>
                </ul>
            </div>
            <div className='flex items-start justify-between gap-16'>


                <div className='w-[50%] bg-no-repeat h-[75vh] bg-contain bg-center bg-[#f2f4f6]' style={{ backgroundImage: `url(${Hero1})` }}>

                </div>
                <div className='flex flex-col gap-6 w-[50%]'>
                    <div className='flex items-center gap-1'>
                        <IoStar className='text-lg' />
                        <IoStar className='text-lg' />
                        <IoStar className='text-lg' />
                        <IoStar className='text-lg' />
                        <IoStar className='text-lg' />
                    </div>

                    <h1 className='text-6xl font-semibold'>Tray Table</h1>
                    <p>Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.</p>
                    <h3>$199.00</h3>
                    <hr />
                    <h5>
                        Measurements <br />
                        <span>17 1/2x20 5/8 "</span>

                    </h5>
                    <div>
                        <h5>Choose Color</h5>
                        <div></div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center space-x-4  bg-gray-100 rounded-md">
                            {/* Decrement Button */}
                            <button
                                onClick={handleDecrement}
                                className="px-4 py-2  rounded-md text-xl hover:bg-black hover:text-white"
                            >
                                -
                            </button>

                            {/* Count Display */}
                            <span className="text-xl font-semibold">{count}</span>

                            {/* Increment Button */}
                            <button
                                onClick={handleIncrement}
                                className="px-4 py-2  rounded-md text-xl hover:bg-black  hover:text-white"
                            >
                                +
                            </button>
                        </div>

                        <button className="btn w-[80%] bg-transparent border border-black hover:bg-gray-100 hover:border-gray-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Wish
                        </button>
                    </div>

                    <Link to={'/'} className="  btn btn-neutral w-full shadow-xl text-gray-50">Add to cart</Link>

                    <hr />



                </div>
            </div>
        </div>
    );
};

export default SingleProduct;