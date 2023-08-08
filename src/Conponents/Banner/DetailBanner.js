import React from 'react';

const DetailBanner = (detail) => {

    console.log(detail);
    return (
        <div className='DetailBanner'>
            <img src={detail.home.cover} alt={detail.home.title} />
        </div>
    );
};

export default DetailBanner;