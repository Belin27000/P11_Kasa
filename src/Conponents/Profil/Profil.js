import React from 'react';

const Profil = ({ title, location }) => {

    return (
        <div className='Profil'>
            <div className='HomeProfil'>
                <h2 className='HomeTitle'>{title}</h2>
                <p className='HomeLocation'>{location}</p>
            </div>


        </div>
    );
};

export default Profil;