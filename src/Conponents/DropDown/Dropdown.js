import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const Dropdown = ({ title, description, liste }) => {
    console.log({ title, description, liste });
    const [open, setOpen] = useState(false);
    let dropdownDetail

    const handleDropdown = () => {
        setOpen(!open);

    }

    if (liste === "listeEquipments") {
        dropdownDetail = open && (
            <ul className={!open ? 'Detail Detail-hidden' : 'Detail'}>
                {
                    description?.map((description, index) => {
                        return <li>
                            {description}
                        </li>
                    })

                }
            </ul>
        )
    } else {
        dropdownDetail = open && (
            <div className={!open ? 'Detail Detail-hidden' : 'Detail'}>
                {description}
            </div>
        )
    }

    return (

        <li className="DesDropdown">
            <div className="HeaderDetails" onClick={handleDropdown} >
                <h3 className="Name">{title}</h3>
                <span >
                    <FaAngleDown className={open ? 'Arrow rotate' : 'Arrow'} onClick={handleDropdown} />
                </span>
            </div>
            {dropdownDetail}
        </li >
    );

};

export default Dropdown;
