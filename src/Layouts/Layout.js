import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';

const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;