import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import LogoHeader from '../../Conponents/Logo/LogoHeader.js';

const Header = () => {
    return (
        <div className='Header'>
            <header>
                <LogoHeader />
                <nav>
                    <ul>
                        <li><Link to="/home">Acceuil</Link></li>
                        <li><Link to="/a-propos">A Propos</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;