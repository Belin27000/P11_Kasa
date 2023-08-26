import React, { useEffect, useState } from 'react';
import { homeService } from '../../../_Services/logements.service.js'
import { useNavigate, useParams } from 'react-router-dom';
import Profil from '../../../Conponents/Profil/Profil.js'
import Rating from '../../../Conponents/Stars/Rating.js';
import Tags from '../../../Conponents/Tag/Tags.js';
import Carrousel from '../../../Conponents/Gallery/Carrousel.js';
import Dropdown from '../../../Conponents/DropDown/Dropdown.js';

import './homeDetails.css'

//Composant pour la gestion des composant du detail du logement
const HomeDetails = () => {

    const [homeDetails, setHomeDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    let { hid } = useParams()//Recupere l'id du logement
    let navigate = useNavigate()
    useEffect(() => {
        getInfo();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getInfo = async () => {
        await homeService.getHome(hid)
            .then((data) => {
                if (data) {
                    setHomeDetails(data);
                    setIsLoading(false);
                } else {
                    navigate("/404");
                }
            })
            .catch((error) => {
                console.log(error)
            })

    }

    if (isLoading) return (<h3>Chargement...</h3>)
    return (

        <div className='Card'>
            <Carrousel images={homeDetails.pictures} title={homeDetails.title} key={homeDetails.id} />
            <div className='CardInfo'>
                <div className='ProfilTag'>
                    <Profil title={homeDetails.title} location={homeDetails.location} host={homeDetails.host} />
                    <Tags tags={homeDetails.tags} />
                </div>
                <div className='ProfilRate'>
                    <div className='HostProfil'>
                        <p className='ProfilName'>{homeDetails.host.name}</p>
                        <img src={homeDetails.host.picture} alt={homeDetails.host.name} />
                    </div>
                    <Rating rating={homeDetails.rating} />
                </div>
            </div>

            <div className='CardDetail'>
                <Dropdown title={"Description"} description={homeDetails.description} liste="description" />
                <Dropdown title={"Équipments"} description={homeDetails.equipments} liste={"listeEquipments"} />
            </div>


        </div>
    );
};

export default HomeDetails;