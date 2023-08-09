import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const SecuDropdown = () => {

    const [hide, setHide] = useState()
    const [rotate, setRotate] = useState()

    const hideDes = () => {
        setHide(!hide)
        setRotate(!rotate)
    }

    return (
        <div className='SecuDropdown'>
            <div className='HeaderDetails'>
                <div className='Name'>Sécurité</div>
                <FaAngleDown className={rotate ? 'Arrow rotate' : 'Arrow'} onClick={hideDes} />

            </div>
            <div className={hide ? 'Detail Detail-hidden' : 'Detail'}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>
        </div>
    );
};

export default SecuDropdown;