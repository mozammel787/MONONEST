import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdOutlineStorefront } from 'react-icons/md';

const ContactInfo = () => {
    return (
        <div>
<h2 className='text-3xl md:text-5xl font-semibold text-center mt-40 mb-10'>Contact Us</h2>
            <div className='container mx-auto flex  items-center gap-6 flex-wrap  px-6 md:px-0 justify-center md:justify-between   my-20 '>
                <div className='flex flex-col items-center gap-2 p-6 md:p-12 bg-[#f2f4f6] w-full md:w-[45%] lg:w-[32%] '>
                    <MdOutlineStorefront className='text-3xl md:text-5xl' />
                    <h5 className='text-lg md:text-xl font-semibold text-gray-400'>Address</h5>
                    <p className='text-lg md:text-xl font-semibold'>234 Hai Trieu, Ho Chi Minh City,
                        Viet Nam</p>
                </div>
                <div className='flex flex-col items-center gap-2 p-6 md:p-12 bg-[#f2f4f6] w-full md:w-[45%] lg:w-[32%] '>
                    <IoCallOutline className='text-3xl md:text-5xl' />
                    <h5 className='text-lg md:text-xl font-semibold text-gray-400'>Contact Us</h5>
                    <p className='text-lg md:text-xl font-semibold'>+84 234 567 890</p>
                </div>
                <div className='flex flex-col items-center gap-2 p-6 md:p-12 bg-[#f2f4f6] w-full md:w-[45%] lg:w-[32%] '>
                    <MdOutlineEmail className='text-3xl md:text-5xl' />
                    <h5 className='text-lg md:text-xl font-semibold text-gray-400'>Email</h5>
                    <p className='text-lg md:text-xl font-semibold'>hello@3legant.com</p>
                </div>

            </div>

        </div>
    );
};

export default ContactInfo;