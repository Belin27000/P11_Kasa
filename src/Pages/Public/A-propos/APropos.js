import React from 'react';
import './apropos.css'

import BannerAbout from '../../../Conponents/Banner/BannerAbout.js';
import Listeabout from '../../../assets/Api/about.json';

import Dropdown from '../../../Conponents/DropDown/Dropdown.js'
const APropos = () => {
    return (
        <section className='About'>
            <BannerAbout />

            <ul className='topics'>
                {
                    Listeabout.map((about) =>
                        <Dropdown key={about.id} id={about.id} title={about.title} description={about.description} liste="classique" />
                    )
                }
            </ul>

        </section>
    );
};

export default APropos;