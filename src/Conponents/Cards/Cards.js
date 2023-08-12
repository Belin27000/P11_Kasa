import React from 'react';

import './cards.css'

const Cards = ({ id, image, title }) => {

    return (
        <li className='CardCover' id={id}>
            <img src={image} alt={title} />
            <p>{title}</p>
        </li>
    );
};

export default Cards;