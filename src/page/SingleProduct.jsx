import React, { useState } from 'react';
import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router-dom';
import ProductCarousel from '../Components/SingleProduct/ProductCarousel';
import ProductCounter from '../Components/SingleProduct/ProductCounter';
import ProductDetils from '../Components/SingleProduct/ProductDetils';
import SimilearProducts from '../Components/SingleProduct/SimilearProducts';



const SingleProduct = () => {
    const [count, setCount] = useState(1);
    const product = useLoaderData()
    console.log(product);
    

    const { name, description, price, images, category, ratings,_id } = product;

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    };

    // Function to render stars based on rating
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(ratings)) {
                stars.push(<IoStar key={i} className="text-lg text-neutral" />); // Full Star
            } else if (i === Math.ceil(ratings) && ratings % 1 !== 0) {
                stars.push(<IoStarHalf key={i} className="text-lg text-neutral" />); // Half Star
            } else {
                stars.push(<IoStarOutline key={i} className="text-lg text-gray-400" />); // Empty Star
            }
        }
        return stars;
    };

    return (
        <div className='container mx-auto'>
            <div className="breadcrumbs text-sm my-3">
                <ul>
                    <li className='text-gray-500'><a>Home</a></li>
                    <li className='text-gray-500'><a>Shop</a></li>
                    <li className='text-gray-500'>{category}</li>
                    <li>{name}</li>
                </ul>
            </div>
            <div className='flex items-start justify-around gap-20'>


                <ProductCarousel images={images} />
                <div className='flex flex-col gap-4 w-[45%]'>
                    <h1 className='text-4xl font-semibold'>{name}</h1>
                    <h3 className='text-3xl font-semibold'>${price}</h3>
                    <div className="flex items-center gap-1">
                        {renderStars()} {/* Dynamic star ratings */}
                    </div>
                   
                    <p className='text-lg text-gray-500'>{description}</p>

                    <hr />
                    <div className='flex justify-between items-center gap-6 w-[80%]'>

                    <ProductCounter />

                    <Link to={'/'} className="  btn btn-neutral w-full shadow-xl text-gray-50">Add to cart</Link>

                    </div>
                    <table className="table w-[50%] my-10 ">
                        <tbody >
                            <tr className='border-0 '>
                                <th className='text-gray-500 font-normal text-base p-0'>SKU</th>
                                <td className='text-black font-normal text-base p-0 pe-2'>{_id}</td>
                            </tr>
                            <tr>
                                <th className='text-gray-500 font-normal text-base p-0 pe-2'>CATEGORY</th>
                                <td className='text-black font-normal text-base p-0'>{category}</td>
                            </tr>
                        </tbody>
                    </table>
                    

                    <ProductDetils description={description} />
                </div>
            </div>
            <SimilearProducts category={category} />
        </div>
    );
};

export default SingleProduct;