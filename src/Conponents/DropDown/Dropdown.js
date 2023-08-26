import React, { useState, useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa";


const Dropdown = ({ title, description, liste }) => {
    const [open, setOpen] = useState(false);
    const [showChildren, setShowChildren] = useState(open)
    let dropdownDetail
    useEffect(() => {
        if (open) {
            setShowChildren(true)
        } else {
            const timer = setTimeout(() => {

                setShowChildren(false)
            }, 500)
            return () => {
                clearTimeout(timer);
            }
        }

    }, [open])


    const handleDropdown = () => {
        setOpen(!open);


    }

    if (liste === "listeEquipments") {
        dropdownDetail = showChildren && (

            <ul className={!open ? 'Detail Detail-hidden' : 'Detail'}>
                {
                    description.map((description, index) => {
                        return <li key={index}>
                            {description}
                        </li>
                    })

                }
            </ul>

        )
    } else {
        dropdownDetail = showChildren && (
            <p className={!open ? 'Detail Detail-hidden' : 'Detail'}>
                {description}
            </p>

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
