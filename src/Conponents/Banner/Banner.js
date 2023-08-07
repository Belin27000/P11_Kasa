import React from 'react';
import banner from '../../assets/Images/Banner.png'

const Banner = () => {
    return (
        <div className='Banner'>
            <img src={banner} alt='Banner beach with mountain and trees' />
            <div>Chez vous, partout et ailleurs</div>
        </div>
    );
};

export default Banner;