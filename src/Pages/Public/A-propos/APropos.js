import React from 'react';
import './apropos.css'
import FiabDropdown from '../../../Conponents/DropDown/FiabDropdown.js';
import RespectDropdown from '../../../Conponents/DropDown/RespectDropdown.js';
import ServDropdown from '../../../Conponents/DropDown/ServDropdown.js';
import SecuDropdown from '../../../Conponents/DropDown/SecuDropdown.js';
import BannerAbout from '../../../Conponents/Banner/BannerAbout.js';


const APropos = () => {
    return (
        <div className='About'>
            <BannerAbout />
            <div className='topics'>
                <FiabDropdown />
                <RespectDropdown />
                <ServDropdown />
                <SecuDropdown />
            </div>
        </div>
    );
};

export default APropos;