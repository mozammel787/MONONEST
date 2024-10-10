import React, { useEffect, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import ProductCard from '../Global/ProductCard';
import PlaceholderProductList from '../../assets/Products/PlaceholderProductList.json';

const NewAriveProduct = () => {
    const [products, setProducts] = useState(PlaceholderProductList)

    const API_URL = import.meta.env.VITE_API_URL || 'https://mononest-backend.onrender.com';
    useEffect(() => {
        fetch(`${API_URL}/product`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                setProducts(data);
            });
    }, [API_URL]);

    const newProduct = products.slice(0, 5);
    return (
        <section className='container mx-auto px-5 md:px-0'>
            <div className='flex justify-between items-center mt-9 '>
                <h2 className='text-3xl md:text-5xl font-semibold'>New <br />
                    Arrivals</h2>
                <Link to={"/shop"} className='inline-flex items-center gap-2  md:text-xl font-medium border-b border-neutral'>More Products <GoArrowRight className='' /></Link>
            </div>
            <div className='flex justify-center md:justify-between items-center gap-6 my-14 flex-wrap '>
                {
                    newProduct.map((product, i) => (

                        <ProductCard key={i} product={product} />
                    ))
                }
            </div>

        </section>
    );
};

export default NewAriveProduct;