import React, { useEffect, useState } from 'react';
import { homeService } from '../../_Services/home.service.js';
import { useParams } from 'react-router-dom';
import Profil from '../Profil/Profil.js';
import Rating from '../Stars/Rating.js';
import Tags from '../Tag/Tags.js';
import Carrousel from '../Gallery/Carrousel.js';
import DesDropdown from '../DropDown/DesDropdown.js';
import EquDropdown from '../DropDown/EquDropdown.js';

const Card = () => {

    const [homeDetails, setHomeDetails] = useState([])
    let { hid } = useParams()//Recupere l'id du logement

    useEffect(() => {
        //renvoi l'objet avec toutes les infos du logement au chargement de la page
        setHomeDetails(homeService.getHome(hid))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <div className='Card'>
            <Carrousel images={homeDetails.pictures} title={homeDetails.title} />
            <div className='CardInfo'>
                <div className='ProfilTag'>
                    <Profil title={homeDetails.title} location={homeDetails.location} host={homeDetails.host} />
                    <Tags tags={homeDetails.tags} />
                </div>
                <div className='ProfilRate'>
                    <div className='HostProfil'>
                        <p className='ProfilName'>{homeDetails.host?.name}</p>
                        <img src={homeDetails.host?.picture} alt={homeDetails.host?.name} />
                    </div>
                    <Rating rating={homeDetails.rating} />
                </div>
            </div>
            <div className='CardDetail'>
                <DesDropdown description={homeDetails.description} />
                <EquDropdown Equipment={homeDetails.equipments} />
            </div>

        </div>
    );
};

export default Card;