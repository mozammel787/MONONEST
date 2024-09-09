import React from 'react';
import NewsletterBg from '../../assets/Newsletter-bg.png'
const Newsletter = () => {
    return (
        <div className="w-full py-24  bg-center bg-blend-multiply bg-cover mt-20" style={{ backgroundImage: `url(${NewsletterBg})` }}>
            <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                <h1 className="text-5xl antialiased font-semibold leading-none text-center ">Join Our Newsletter</h1>
                <p className="pt-2 pb-8 text-xl antialiased text-center ">Sign up for deals, new products and promotions</p>
                <div className="flex flex-row border-b border-black">
                    <input type="text" placeholder="example@email.com" className="w-3/5 py-3 bg-transparent sm:w-2/3 focus:outline-none" />
                    <button type="button" className=" py-3 font-semibold  sm:w-1/3  ">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;