import React from 'react';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Bedroom from '../../assets/Bedroom.png'
import { IoStar } from 'react-icons/io5';

const ProductCard = () => {
    return (
        <div className="card  rounded-none group ">
            <figure className='relative bg-[#f2f4f6]' >
                <img
                    src={Bedroom}
                    alt="Shoes"
                    className='h-[350px] object-contain group-hover:scale-110 duration-700' />
                <div className="absolute top-4 left-4 badge badge-secondary rounded bg-white border-0 font-bold shadow-xl">NEW</div>
                <div className="absolute top-12 left-4 badge bg-[#d17f34] rounded border-0 font-bold text-white shadow-xl">-50%</div>
                <label className="swap  absolute top-4 right-4 p-2 rounded-full bg-white shadow-xl hidden group-hover:inline-grid duration-700">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* sun icon */}
                    <GoHeart className="swap-off text-2xl" />

                    {/* moon icon */}
                    <GoHeartFill className="swap-on text-2xl" />


                </label>
                <div className="absolute bottom-4 px-4 w-full hidden group-hover:inline-block duration-700">
                    <Link to={'/product'} className="  btn btn-neutral w-full shadow-xl text-gray-50">Add to cart</Link>

                </div>
            </figure>
            <div className="card-body p-0 pt-3">
                <div className='flex items-center gap-1'>
                    <IoStar className='text-lg' />
                    <IoStar className='text-lg' />
                    <IoStar className='text-lg' />
                    <IoStar className='text-lg' />
                    <IoStar className='text-lg' />
                </div>
                <h2 className="card-title font-semibold">
                    Loveseat Sofa
                </h2>
                <p className="card-title font-semibold">$199.00</p>
            </div>
        </div>
    );
};

export default ProductCard;