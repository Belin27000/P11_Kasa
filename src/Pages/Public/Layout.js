import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Layouts/Header/Header.js';
import Footer from '../../Layouts/Footer/Footer.js';

//Le router va nous permettre d'avoir une application plus maintenanble
//Grace au layout nous n'importons qu'une seul fois le header et le footer sur toute nos pages
const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;