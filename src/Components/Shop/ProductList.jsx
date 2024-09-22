import React, { useState, useEffect } from 'react';
import ProductCard from '../Global/ProductCard';
import MobileFilter from './MobileFilter';

const ProductList = ({ products, categories, priceRanges, selectedCategory, setSelectedCategory, selectedPrice, setSelectedPrice, loading }) => {
    const [sortOption, setSortOption] = useState(''); // State for selected sorting option
    const [sortedProducts, setSortedProducts] = useState([]);

    // Update sorted products when sortOption or products change
    useEffect(() => {
        let sorted = [...products]; // Make a copy of the products array

        // Perform sorting based on the selected sort option
        switch (sortOption) {
            case 'Price: Low to High':
                sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                break;
            case 'Price: High to Low':
                sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                break;
            case 'Newest':
                sorted.sort((a, b) => new Date(b.date) - new Date(a.date)); // Assuming `date` is in the product object
                break;
            case 'Best Selling':
                sorted.sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)); // Assuming `ratings` exist in the product
                break;
            default:
                break;
        }

        setSortedProducts(sorted); // Update the sortedProducts state
    }, [sortOption, products]); // Re-run effect whenever sortOption or products change

    return (
        <div className='md:w-[75%] px-6 md:px-0'>
            <div className='flex items-center justify-between flex-col md:flex-row gap-3'>
                <div className='flex items-center gap-6 justify-between md:justify-end w-full flex-row-reverse'>
                    <MobileFilter
                        categories={categories}
                        priceRanges={priceRanges}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedPrice={selectedPrice}
                        setSelectedPrice={setSelectedPrice} 
                    />
                    <h3 className='text-xl md:text-3xl font-semibold'>{selectedCategory}</h3>
                </div>
                <div className='flex items-center gap-6 justify-end w-full'>
                    {/* Sorting select dropdown */}
                    <select
                        className="ps-0 select w-[40%] text-lg font-semibold"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)} // Update sortOption on selection
                    >
                        <option value="" disabled>Select sort option</option>
                        <option value="Price: Low to High">Price: Low to High</option>
                        <option value="Price: High to Low">Price: High to Low</option>
                        <option value="Newest">Newest</option>
                        <option value="Best Selling">Best Selling</option>
                    </select>
                </div>
            </div>

            <div className='flex justify-center md:justify-around flex-wrap items-center gap-6 my-10'>
                {loading ? (
                    // Render skeleton loaders while loading
                    Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="card w-[262px] h-[350px] flex flex-col gap-4">
                            <div className="skeleton h-96 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    ))
                ) : sortedProducts.length > 0 ? (
                    sortedProducts.map((product, i) => <ProductCard key={i} product={product} />)
                ) : (
                    <p>No products found for the selected filters.</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;
