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
        </div>
    );
};

export default ProductCounter;