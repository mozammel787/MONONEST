import React from 'react';
import ShopBannerBg from "../../assets/Shop Banner Bg.png"
const ShopBanner = () => {
    return (
        <div className="container mx-auto py-12 md:py-24  bg-center bg-blend-multiply bg-cover  " style={{ backgroundImage: `url(${ShopBannerBg})` }}>
            <div className="container flex flex-col flex-wrap items-center justify-center p-4 md:py-20 mx-auto md:p-10 gap-6">
                <div className="breadcrumbs text-sm ">
                    <ul>
                        <li className='text-gray-500'><a>Home</a></li>
                        <li><a>Shop</a></li>
                    </ul>
                </div>
                <h1 className="text-3xl md:text-5xl antialiased font-semibold leading-none text-center ">Shop Page</h1>
                <p className="pt-2 pb-8 md:text-xl antialiased text-center ">Let’s design the place you always imagined.</p>

            </div>
        </div>
    );
};

export default ShopBanner;