import React from 'react';

const Profil = ({ title, location }) => {

    return (
        <div className='Profil'>
            <div className='HomeProfil'>
                <p className='HomeTitle'>{title}</p>
                <p className='HomeLocation'>{location}</p>
            </div>


        </div>
    );
};

export default Profil;