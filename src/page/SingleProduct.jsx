import React, { useState } from 'react';
import Hero1 from "../assets/LivingRoom.png";
import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import ProductCarousel from '../Components/SingleProduct/ProductCarousel';
import ProductCounter from '../Components/SingleProduct/ProductCounter';
import ProductDetils from '../Components/SingleProduct/ProductDetils';
import SimilearProducts from '../Components/SingleProduct/SimilearProducts';



const SingleProduct = () => {
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
        <div className='container mx-auto'>
            <div className="breadcrumbs text-sm my-3">
                <ul>
                    <li className='text-gray-500'><a>Home</a></li>
                    <li className='text-gray-500'><a>Shop</a></li>
                    <li className='text-gray-500'>Living Room</li>
                    <li>Tray Table</li>
                </ul>
            </div>
            <div className='flex items-start justify-around gap-20'>


                <ProductCarousel />
                <div className='flex flex-col gap-4 w-[45%]'>
                    <div className='flex items-center gap-1'>
                        <IoStar className='text-lg' />
                        <IoStar className='text-lg' />
                        <IoStar className='text-lg' />
                        <IoStar className='text-lg' />
                        <IoStar className='text-lg' />
                    </div>
                    <h1 className='text-5xl font-semibold'>Tray Table</h1>
                    <p className='text-lg text-gray-500'>Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.</p>
                    <h3 className='text-3xl font-semibold'>$199.00</h3>
                    <hr />
                    <h5 className='text-xl text-gray-500 font-semibold'>
                        Measurements <br />
                        <span className='text-2xl text-black font-normal'>17 1/2x20 5/8 "</span>
                    </h5>

                    <ProductCounter />

                    <Link to={'/'} className="  btn btn-neutral w-full shadow-xl text-gray-50">Add to cart</Link>

                    <table className="table w-[50%] my-6">
                        <tbody >
                            <tr className='border-0'>
                                <th className='text-gray-500 font-normal text-base'>SKU</th>
                                <td className='text-black font-normal text-base'>1117</td>
                            </tr>
                            <tr>
                                <th className='text-gray-500 font-normal text-base'>CATEGORY</th>
                                <td className='text-black font-normal text-base'>Living Room</td>
                            </tr>
                        </tbody>
                    </table>

                    <ProductDetils />
                </div>
            </div>
            <SimilearProducts />
        </div>
    );
};

export default SingleProduct;