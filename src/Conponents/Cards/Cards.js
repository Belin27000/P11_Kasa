import React, { useEffect, useState } from 'react';
import { homeService } from '../../_Services/home.service.js';
import './cards.css'
import { Link } from 'react-router-dom';

// Ce composant map sur chaque home pour créer l'ensemble des cartes des logements dans home
const Cards = () => {

    const [homes, setHome] = useState([])


    useEffect(() => {

        setHome(homeService.getAllData())


    }, [])

    return (
        < div className='Cards'>
            {

                homes.map((home) => (

                    // chaque card est un lien qui renvoi vers sa fiche dans Fiche-Logement
                    <Link to={`/HomeDetails/${home.id}`}>
                        <div className='CardCover'>
                            <img src={home.cover} alt={home.title} />
                            <p>{home.title}</p>
                        </div>
                    </Link>
                ))
            }
        </div>

    );
};

export default Cards;