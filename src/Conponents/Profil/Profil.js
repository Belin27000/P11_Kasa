import React from 'react';

const Profil = ({ title, location, host }) => {

    // const [detail, SetDetail] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     SetDetail(homeDetails)
    //     setLoading(false)

    // })
    // if (loading) return <h1>LOADING...</h1>

    //met une condtion pour verifier que les data sont bien arrivé avant de les affiché
    //https://youtu.be/UZT1V-VJxZE
    return (
        <div className='Profil'>
            <div className='HomeProfil'>
                <p className='HomeTitle'>{title}</p>
                <p className='HomeLocation'>{location}</p>
            </div>


        </div>
    );
};

export default Profil;