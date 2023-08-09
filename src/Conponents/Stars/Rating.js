import React from 'react';
import { FaStar } from "react-icons/fa";

//Recoi la props rating du logement dans Card
const Rating = (rate) => {
    let sumRate = []//initialise mon tableau pour recevoir mes note
    for (let i = 0; i < 5; i++) {//boucle 5 fois pour couvrir la note sur 5
        if (i < rate.rating) { //Ajoute la class qui sera mise en forme dans homeDetails.css après
            sumRate.push(<FaStar className='GoodStar' key={i} />)
        } else {
            sumRate.push(<FaStar className='BadStar' key={i} />)
        }
    }

    return (//Renvoi mon tablea de rate avec les class ajoutée
        <div className='Rating'>
            {sumRate}
        </div>
    );
};

export default Rating;