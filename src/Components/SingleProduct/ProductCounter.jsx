import React from 'react';

const ProductCounter = ({count, handleIncrement, handleDecrement}) => {

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
        </div>
    );
};

export default ProductCounter;