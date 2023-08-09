import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const FiabDropdown = () => {

    const [hide, setHide] = useState()
    const [rotate, setRotate] = useState()

    const hideDes = () => {
        setHide(!hide)
        setRotate(!rotate)
    }
    return (
        <div className='FiabDropdown'>
            <div className='HeaderDetails'>
                <div className='Name'>Fiabilité</div>
                <FaAngleDown className={rotate ? 'Arrow rotate' : 'Arrow'} onClick={hideDes} />

            </div>
            <div className={hide ? 'Detail Detail-hidden' : 'Detail'}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</div>
        </div>
    );
};

export default FiabDropdown;