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
            <div className='HeaderDes'>
                <div className='DesName'>{Object.keys(description)}</div>
                <FaAngleDown className={rotate ? 'DesArrow rotate' : 'DesArrow'} onClick={hideDes} />
            </div>
            <div className={hide ? 'DesDetail DesDetail-hidden' : 'DesDetail'}>{description.description}</div>

        </div>
    );
};

export default DesDropdown;
