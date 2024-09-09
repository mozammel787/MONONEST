import React from 'react';
import Hero from '../Components/Home/Hero';
import MainCategories from '../Components/Home/MainCategories';
import NewAriveProduct from '../Components/Home/NewAriveProduct';
import Service from '../Components/Home/Service';
import Newsletter from '../Components/Home/Newsletter';

const Home = () => {
    return (
        <>
            <Hero />
            <MainCategories />
            <NewAriveProduct/>
            <Service/>
            <Newsletter/>
        </>
    );
};

export default Home;