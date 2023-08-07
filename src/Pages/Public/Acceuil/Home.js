import React from 'react';
import Banner from '../../../Conponents/Banner/Banner.js';
import './home.css'
import Cards from '../../../Conponents/Cards/Cards.js';

const Home = () => {
    return (
        <div className='Home'>
            <Banner />
            <Cards />
        </div>
    );
};

export default Home;