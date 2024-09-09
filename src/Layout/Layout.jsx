import React from 'react';
import Header from '../Components/Global/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Global/Footer';

const Layout = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
            
        </>
    );
};

export default Layout;