import React, { useEffect, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import ProductCard from '../Global/ProductCard';

const SimilearProducts = ({category}) => {
    const [products, setProducts] = useState([]);

    const API_URL = import.meta.env.VITE_API_URL || 'https://mononest-backend.onrender.com';

    useEffect(() => {
        fetch(`${API_URL}/product`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [API_URL]);

    const filteredProducts = products
        .filter((product) => !category || product.category === category)
        .slice(0, 5);

    return (
        <section className='container mx-auto px-5'>
            <div className='flex justify-between items-center mt-9 '>
                <h2 className='text-3xl md:text-4xl font-semibold'>You might also like</h2>
                <Link to={"/shop"} className='inline-flex items-center gap-2  md:text-xl font-medium border-b border-neutral'>More Products <GoArrowRight className='' /></Link>
            </div>
            <div className='flex justify-center md:justify-between items-center gap-6 my-14 flex-wrap'>
            {
                    filteredProducts?.map((product, i) => (

                        <ProductCard key={i} product={product} />
                    ))
                }
            </div>

        </section>
    );
};

export default SimilearProducts;