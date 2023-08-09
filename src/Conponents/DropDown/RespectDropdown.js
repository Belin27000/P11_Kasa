import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const RespectDropdown = () => {

    const [hide, setHide] = useState()
    const [rotate, setRotate] = useState()

    const hideDes = () => {
        setHide(!hide)
        setRotate(!rotate)
    }

    return (
        <div className='RespectDropdown'>
            <div className='HeaderDetails'>
                <div className='Name'>Respect</div>
                <FaAngleDown className={rotate ? 'Arrow rotate' : 'Arrow'} onClick={hideDes} />

            </div>
            <div className={hide ? 'Detail Detail-hidden' : 'Detail'}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
        </div>
    );
};

export default RespectDropdown;