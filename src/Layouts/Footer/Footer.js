import React from 'react';
import LogoFooter from '../../Conponents/Logo/LogoFooter.js';
import './footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <footer>
                <LogoFooter />
                <p>
                    © 2020 Kasa. All rights reserved
                </p>
            </footer>
        </div>
    );
};

export default Footer;