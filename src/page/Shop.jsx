import React from 'react';
import ShopBanner from '../Components/Shop/ShopBanner';
import Filter from '../Components/Shop/Filter';
import ProductList from '../Components/Shop/ProductList';

const Shop = () => {
    return (
        <>
            <ShopBanner/>
            <div className='flex justify-between items-start gap-6 w-full container mx-auto mt-14'>
                <Filter />
                <ProductList />
            </div>
        </>
    );
};

export default Shop;