import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import ProductCard from '../Global/ProductCard';

const NewAriveProduct = () => {
    return (
        <section className='container mx-auto'>
            <div className='flex justify-between items-center mt-9 '>
                <h2 className='text-6xl font-semibold'>New <br />
                    Arrivals</h2>
                <Link to={"/"} className='inline-flex items-center gap-2 text-xl font-medium border-b border-neutral'>More Products <GoArrowRight className='' /></Link>
            </div>
            <div className='flex justify-between items-center gap-6 my-14'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>

        </section>
    );
};

export default NewAriveProduct;