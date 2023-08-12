import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import LOGOHeader from '../../assets/Images/LOGOHeader.png'

const Header = () => {
    return (
        <div className='Header'>
            <header>
                <div className='LogoContainer'>
                    <img className='Logo' src={LOGOHeader} alt='Logo of Kasa app' />
                </div>
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