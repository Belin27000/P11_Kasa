import React from 'react';
import { Link } from 'react-router-dom';
import './pageError.css'

const PageError = () => {
    return (
        <div className='PageError'>
            <p>
                404
            </p>
            <p>
                Oups! La page que vous demandez n'existe pas.
            </p>
            <p>
                <Link to="/home">
                    Retourner sur la page d’accueil
                </Link>
            </p>
        </div>
    );
};

export default PageError;