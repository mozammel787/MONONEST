import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Livingroom from '../../assets/LivingRoom.png'
import Bedroom from '../../assets/Bedroom.png'
import Kitchen from '../../assets/Kitchen.png'

const MainCategories = () => {
    return (
        <section className='container mx-auto px-6'>
            <div className='flex justify-between md:items-center flex-col md:flex-row mt-9 mb-14  gap-6'>
                <h2 className='text-5xl md:text-8xl font-semibold'>Simply Unique<span className='text-gray-500'>/</span><br />
                    Simply Better<span className='text-gray-500'>.</span></h2>
                <p className='text-gray-500 text-base pr-10 hidden md:block'>MONONEST is a gift & decorations store based in HCMC,<br /> Vietnam. Est since 2019.
                </p>
                <p className='text-gray-500 text-base pr-10  md:hidden'>MONONEST is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
                </p>
            </div>
            <div className='flex justify-between gap-6 items-center flex-col md:flex-row'>
                <div className="p-6 md:p-12 w-full h-[50vh] md:h-[80vh] bg-no-repeat bg-contain bg-center   bg-[#f2f5f7]" style={{ backgroundImage: `url(${Livingroom})` }}>
                    <h4 className='text-4xl font-medium'>Living Room</h4>
                    <Link to={"/"} className='inline-flex items-center gap-2 text-xl border-b border-neutral'>Shop Now <GoArrowRight className='' /></Link>
                </div>
                <div className='flex w-full justify-between gap-6 items-center flex-col'>
                    <div className="p-6 md:p-12 w-full h-[50vh]  md:h-[39vh] bg-no-repeat  md:bg-contain bg-right   bg-[#f2f5f7] " style={{ backgroundImage: `url(${Bedroom})` }}>
                        <h4 className='text-4xl font-medium'>Bedroom</h4>
                        <Link to={"/"} className='inline-flex items-center gap-2 text-xl border-b border-neutral'>Shop Now <GoArrowRight className='' /></Link>
                    </div>
                    <div className="w-full p-6 md:p-12 h-[50vh]  md:h-[39vh] bg-no-repeat md:bg-contain bg-right  bg-[#f2f5f7]  " style={{ backgroundImage: `url(${Kitchen})` }}>
                        <h4 className='text-4xl font-medium'>Kitchen</h4>
                        <Link to={"/"} className='inline-flex items-center gap-2 text-xl border-b border-neutral'>Shop Now <GoArrowRight className='' /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainCategories;