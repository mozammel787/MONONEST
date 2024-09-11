import React, { useState } from 'react';
import { AiOutlineControl } from 'react-icons/ai';

const categories = ['Technology', 'Health', 'Finance', 'Education', 'Entertainment'];
const priceRanges = [
    'All Price',
    '$0.00 - $99.99',
    '$100.00 - $199.99',
    '$200.00 - $299.99',
    '$300.00 - $399.99',
    '$400.00+'
];


const MobileFilter = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState('All Price'); // Only one price can be selected

    // Set the selected price range
    const selectPrice = (price) => {
        setSelectedPrice(price);
    };
    const selectCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="drawer w-auto z-50  md:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn rounded-none border-0 p-2 py-1  bg-transparent shadow-none text-gray-900 text-lg drawer-button"> <AiOutlineControl />Filters</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">

                    <h3 className= ' text-2xl md:text-3xl flex items-center gap-2 font-semibold mt-3' ><AiOutlineControl />
                        Filter
                    </h3>

                    <div className='mt-10'>
                        <h5 className='text-lg md:text-2xl font-semibold'>CATEGORIES</h5>
                        <div className="flex flex-col items-start gap-4 mt-4">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => selectCategory(category)}
                                    className={` md:text-xl font-medium 
              ${selectedCategory === category
                                            ? ' text-black border-black border-b-2'
                                            : ' text-gray-400 border-gray-300'
                                        }
               hover:text-black`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                    </div>
                    <div className='mt-10'>
                        <h5 className='text-lg md:text-2xl font-semibold mb-4'>PRICE</h5>

                        {/* List of price ranges */}
                        <div className="w-64">
                            {priceRanges.map((price) => (
                                <label key={price} className="flex items-center justify-between space-x-3 mb-3 cursor-pointer gap-4">
                                    <span
                                        className={` flex items-center md:text-xl font-medium ${selectedPrice === price ? 'text-black' : 'text-gray-400'
                                            }`}
                                    >
                                        {price}

                                    </span>
                                    <div className="relative">
                                        <input
                                            type="radio"
                                            name="priceRange"
                                            value={price}
                                            checked={selectedPrice === price}
                                            onChange={() => selectPrice(price)}
                                            className="sr-only" // Hides the default radio button
                                        />
                                        <div
                                            className={`w-4 md:w-6 h-4 md:h-6 border-2 rounded flex justify-center items-center  ${selectedPrice === price
                                                ? 'bg-black border-black'
                                                : 'border-gray-400 '
                                                }`}
                                        >
                                            {selectedPrice === price && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3 w-3 text-white"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={3}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>

                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileFilter;