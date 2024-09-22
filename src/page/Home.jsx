import React from 'react';
import Hero from '../Components/Home/Hero';
import MainCategories from '../Components/Home/MainCategories';
import NewAriveProduct from '../Components/Home/NewAriveProduct';
import Service from '../Components/Home/Service';
import SellOffer from '../Components/Home/SellOffer';

const Home = () => {
    return (
        <>
            <Hero />
            <MainCategories />
            <NewAriveProduct/>
            <SellOffer/>
            <Service/>
        </>
    );
};

export default Home;