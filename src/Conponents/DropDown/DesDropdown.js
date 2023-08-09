import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const DesDropdown = (description) => {
    console.log(Object.keys(description));
    const [hide, setHide] = useState()
    const [rotate, setRotate] = useState()

    const hideDes = () => {
        setHide(!hide)
        setRotate(!rotate)
    }

    return (
        <div className='DesDropdown'>
            <div className='HeaderDetails'>
                <div className='Name'>{Object.keys(description)}</div>
                <FaAngleDown className={rotate ? 'Arrow rotate' : 'Arrow'} onClick={hideDes} />
            </div>
            <div className={hide ? 'Detail Detail-hidden' : 'Detail'}>{description.description}</div>

        </div>
    );
};

export default DesDropdown;
