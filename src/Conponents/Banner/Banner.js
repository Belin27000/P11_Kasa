import React from 'react';


const Banner = ({ image, title }) => {
    return (
        <div className='Banner'>
            <img src={image} alt='Banner beach with mountain and trees' />
            <div>{title}</div>
        </div>
    );
};

export default Banner;