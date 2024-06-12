import React from 'react';
import Banner from '../Banner/Banner';
import Food from '../Food/Food';
import Navbar from '../../../Shared/Navbar/Navbar';
import { CartProvider } from '../../../Context/CartContext/CartContext';


const Home = () => {
    return (
        <div>
            <CartProvider>
            <Navbar></Navbar>
            <Banner></Banner>
            <Food></Food>
            </CartProvider>
        </div>
    );
};

export default Home;