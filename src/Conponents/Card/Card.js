import React, { useEffect, useState } from 'react';
import { homeService } from '../../_Services/home.service.js';
import { useParams } from 'react-router-dom';
import DetailBanner from '../../Conponents/Banner/DetailBanner.js'
import Profil from '../Profil/Profil.js';
import Rating from '../Stars/Rating.js';
import Tags from '../Tag/Tags.js';

const Card = () => {

    const [homeDetails, setHomeDetails] = useState([])
    let { hid } = useParams()//Recupere l'id du logement
    // console.log(hid);
    // console.log(homeDetails);

    useEffect(() => {
        //renvoi l'objet avec toutes les infos du logement au chargement de la page
        setHomeDetails(homeService.getHome(hid))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <div className='Card'>
            <DetailBanner home={homeDetails} />
            <Profil title={homeDetails.title} location={homeDetails.location} host={homeDetails.host} />
            <div className='TagRate'>
                <Tags tags={homeDetails.tags} />
                <Rating rating={homeDetails.rating} />
            </div>
        </div>
    );
};

export default Card;