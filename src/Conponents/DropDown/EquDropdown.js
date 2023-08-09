import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";


const EquDropdown = (Equipment) => {
    console.log(Equipment);
    const [hide, setHide] = useState()
    const [rotate, setRotate] = useState()

    const hideEqu = () => {
        setHide(!hide)
        setRotate(!rotate)
    }

    return (
        <div className='EquDropdown'>
            <div className='HeaderDetails'>
                <div className='Name'>{Object.keys(Equipment)}</div>
                <FaAngleDown className={rotate ? 'Arrow rotate' : 'Arrow'} onClick={hideEqu} />
            </div>
            <div className={hide ? 'Detail Detail-hidden' : 'Detail'}>

                {
                    Equipment.Equipment?.map((equ) =>
                    (
                        <div className='equ'>{equ}</div>
                    ))

                }

            </div>

        </div>
    );
};

export default EquDropdown;