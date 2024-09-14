import React from 'react';
import { AiOutlineControl } from 'react-icons/ai';

const Filter = ({ categories, priceRanges, selectedCategory, setSelectedCategory, selectedPrice, setSelectedPrice }) => {
  // Include 'All Categories' option in the categories list
  const categoryOptions = ['All Categories', ...categories];

  return (
    <div className='w-[25%] hidden md:block'>
      <h3 className='text-3xl flex items-center gap-2 font-semibold mt-3'><AiOutlineControl /> Filter</h3>

      {/* Dynamic Categories Filter */}
      <div className='mt-10'>
        <h5 className='text-2xl font-semibold'>CATEGORIES</h5>
        <div className="flex flex-col items-start gap-4 mt-4">
          {categoryOptions.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All Categories' ? null : category)}
              className={`text-xl font-medium ${selectedCategory === category
                ? 'text-black border-black border-b-2'
                : 'text-gray-400 border-gray-300'} hover:text-black`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Price Filter */}
      <div className='mt-10'>
        <h5 className='text-2xl font-semibold mb-4'>PRICE</h5>
        <div className="w-64">
          {priceRanges.map((price) => (
            <label key={price} className="flex items-center justify-between space-x-3 mb-3 cursor-pointer gap-4">
              <span className={`flex items-center text-xl font-medium ${selectedPrice === price ? 'text-black' : 'text-gray-400'}`}>
                {price}
              </span>
              <input
                type="radio"
                name="priceRange"
                value={price}
                checked={selectedPrice === price}
                onChange={() => setSelectedPrice(price)}
                className="sr-only" // Hide default radio button
              />
              <div className={`w-6 h-6 border-2 rounded flex justify-center items-center ${selectedPrice === price ? 'bg-black border-black' : 'border-gray-400'}`}>
                {selectedPrice === price && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
