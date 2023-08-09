import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";


const ServDropdown = () => {

    const [hide, setHide] = useState()
    const [rotate, setRotate] = useState()

    const hideDes = () => {
        setHide(!hide)
        setRotate(!rotate)
    }
    return (
        <div className='ServDropdown'>
            <div className='HeaderDetails'>
                <div className='Name'>Service</div>
                <FaAngleDown className={rotate ? 'Arrow rotate' : 'Arrow'} onClick={hideDes} />

            </div>
            <div className={hide ? 'Detail Detail-hidden' : 'Detail'}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
        </div>
    );
};

export default ServDropdown;