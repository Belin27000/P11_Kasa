import React, { useEffect, useState } from 'react';
import { homeService } from '../../_Services/home.service.js';
import './cards.css'

// Ce composant renvoi l'ensemble des cartes des logements dans home
const Cards = () => {

    const [homes, setHome] = useState([])

    useEffect(() => {
        setHome(homeService.getAllData)

    }, [])

    return (
        < div className='Cards'>
            {

                homes.map(home => (
                    <div className='CardCover'>
                        <img src={home.cover} alt={home.title} />
                        <p>{home.title}</p>

                    </div>
                ))
            }
        </div>

    );
};

export default Cards;