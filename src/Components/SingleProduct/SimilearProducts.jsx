import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import ProductCard from '../Global/ProductCard';

const SimilearProducts = () => {
    return (
        <section className='container mx-auto px-5'>
            <div className='flex justify-between items-center mt-9 '>
                <h2 className='text-3xl md:text-4xl font-semibold'>You might also like</h2>
                <Link to={"/shop"} className='inline-flex items-center gap-2  md:text-xl font-medium border-b border-neutral'>More Products <GoArrowRight className='' /></Link>
            </div>
            <div className='flex justify-center md:justify-between items-center gap-6 my-14 flex-wrap'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </section>
    );
};

export default SimilearProducts;