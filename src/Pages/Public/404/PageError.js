import React from 'react';
import { Link } from 'react-router-dom';
import './pageError.css'

const PageError = () => {
    return (
        <section className='PageError'>
            <h1 className="titre-404">404</h1>
            <p className="description-404">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/home" className="lien-site lien-404">Retourner sur la page d’accueil</Link>
        </section>
    );
};

export default PageError;