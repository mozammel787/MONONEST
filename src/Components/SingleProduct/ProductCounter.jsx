import React, { useState } from 'react';

const ProductCounter = () => {
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
        <div className="flex items-center gap-6">
            <div className="flex items-center space-x-4  bg-gray-100 rounded-md">
                <button
                    onClick={handleDecrement}
                    className="px-4 py-2  rounded-md text-xl hover:bg-black hover:text-white"
                > - </button>
                <span className="text-xl font-semibold">{count}</span>
                <button
                    onClick={handleIncrement}
                    className="px-4 py-2  rounded-md text-xl hover:bg-black  hover:text-white"
                > + </button>
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
    );
};

export default ProductCounter;