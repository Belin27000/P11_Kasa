import React from 'react';
import LOGOHeader from '../../assets/Images/LOGOHeader.png'

const LogoHeader = () => {
    return (
        <div className='LogoContainer'>
            <img className='Logo' src={LOGOHeader} alt='Logo of Kasa app' />
        </div>
    );
};

export default LogoHeader; 