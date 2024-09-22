import React from 'react';
import offerImage from '../../assets/Offer.png'
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
const SellOffer = () => {
    return (
        <div className='flex bg-[#f2f5f7] w-full my-20'>
            <div className='w-[50%] '>
                <img className='w-full h-[600px] object-cover' src={offerImage} alt="" />
            </div>
            <div className='w-[50%] inline-flex flex-col justify-center p-20 gap-4'>
                <div className='w-[50%] flex flex-col justify-center gap-4'>
                    <h5 className='text-blue-600 font-bold'>SALE UP TO 35% OFF</h5>
                    <h2 className='text-5xl font-semibold'>HUNDREDS of <br />
                        New lower prices!</h2>
                    <p className='text-lg'>It’s more affordable than ever to give every room in your home a stylish makeover</p>
                </div>
                <div>
                    <Link to={"/"} className='inline-flex items-center gap-2 text-xl border-b border-neutral'>Shop Now <GoArrowRight className='' /></Link>
                </div>
            </div>

        </div>
    );
};

export default SellOffer;