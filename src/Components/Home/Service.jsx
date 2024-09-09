import React from 'react';
import { LiaLockSolid, LiaMoneyBillSolid, LiaPhoneSolid, LiaShippingFastSolid } from 'react-icons/lia';

const Service = () => {
    return (
        <div className='container mx-auto flex justify-between items-center gap-6'>
            <div className='flex flex-col gap-2  p-12 bg-[#f2f4f6] w-full'>
                <LiaShippingFastSolid className='text-5xl' />
                <h5 className='text-2xl font-semibold'>Free Shipping</h5>
                <p className='text-gray-400'>Order above $200</p>
            </div>
            <div className='flex flex-col gap-2  p-12 bg-[#f2f4f6] w-full'>
                <LiaMoneyBillSolid  className='text-5xl' />
                <h5 className='text-2xl font-semibold'>Money-back</h5>
                <p className='text-gray-400'>30 days guarantee</p>
            </div>
            <div className='flex flex-col gap-2  p-12 bg-[#f2f4f6] w-full'>
                <LiaLockSolid  className='text-5xl' />
                <h5 className='text-2xl font-semibold'>Secure Payments</h5>
                <p className='text-gray-400'>Secured by Stripe</p>
            </div>
            <div className='flex flex-col gap-2  p-12 bg-[#f2f4f6] w-full'>
                <LiaPhoneSolid  className='text-5xl' />
                <h5 className='text-2xl font-semibold'>24/7 Support</h5>
                <p className='text-gray-400'>Phone and Email support</p>
            </div>
        </div>
    );
};

export default Service;