import React from 'react';
import LOGOFooter from '../../assets/Images/LogoWhite.png';
import './footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <footer>
                <div>
                    <img src={LOGOFooter} alt='Logo of Kasa app' />
                </div>
                <p>
                    © 2020 Kasa. All rights reserved
                </p>
            </footer>
        </div>
    );
};

export default Footer;