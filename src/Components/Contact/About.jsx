import React from 'react';
import offerImage from '../../assets/Offer.png'
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
const About = () => {
    return (
        <div className='flex bg-[#f2f5f7] flex-col md:flex-row container '>
            <div className='md:w-[50%] '>
                <img className='w-full h-[550px] object-cover' src={offerImage} alt="" />
            </div>
            <div className='md:w-[50%] inline-flex flex-col justify-center p-6 md:p-20 gap-4'>
                <div className=' flex flex-col justify-center gap-4'>
                    <h2 className='text-3xl md:text-5xl font-semibold'>About Us</h2>
                    <p className='text-lg'>3legant is a gift & \ store based in HCMC, Vietnam. Est since 2019. <br />
                    Our customer service is always prepared to support you 24/7</p>
                </div>
                <div>
                    <Link to={"/"} className='inline-flex items-center gap-2 md:text-xl border-b border-neutral'>Shop Now <GoArrowRight className='' /></Link>
                </div>
            </div>

        </div>
    );
};

export default About;