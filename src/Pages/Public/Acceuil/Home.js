import React from 'react';
import Banner from '../../../Conponents/Banner/Banner.js';
import imagehome from '../../../assets/Images/Banner.png'
import Cards from '../../../Conponents/Cards/Cards.js';
import './home.css';
import LogementService from '../../../_Services/logements.service.js';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <section className='Home'>
            <Banner image={imagehome} title="Chez vous, partout et ailleurs" />

            <ul className="Cards">
                {
                    LogementService.getAllData().map((logement) =>
                        <Link key={logement.id} to={`/HomeDetails/${logement.id}/#`}>
                            <Cards key={logement.id} id={logement.id} image={logement.cover} title={logement.title} />
                        </Link>
                    )
                }
            </ul>
        </section>
    );
};

export default Home;