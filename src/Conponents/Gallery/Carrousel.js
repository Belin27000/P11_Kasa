import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const Carrousel = ({ images, title }) => {
    const [carButton, setCarButton] = useState(true)

    useEffect(() => {
        if (images.length <= 1) {
            setCarButton(false)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // variable de controle du slide sur lequel on se trouve
    const [slide, SetSlide] = useState(0)

    //configure la variable slide en fonction du click sur la flechede droite
    const nextSlide = () => {
        SetSlide(slide === images.length - 1 ? 0 : slide + 1)
    }
    //configure la variable slide en fonction du click sur la flechede droite
    const previsouSlide = () => {
        SetSlide(slide === 0 ? images.length - 1 : slide - 1)
    }

    return (
        <div className='Carrousel'>
            <FaAngleLeft className={carButton ? 'arrow arrow-left' : 'arrow-hidden'} onClick={previsouSlide} />

            <div className='slides'>
                {
                    images.map((image, index) => {
                        return (
                            // si l'index correspond a l'index courant on ajoute une classe hiden au autres images
                            <img src={image} alt={title + index} key={index} className={slide === index ? "slide" : "slide slide-hidden"} />

                        )
                    })

                }
            </div>
            <FaAngleRight className={carButton ? 'arrow arrow-right' : 'arrow-hidden'} onClick={nextSlide} />
            <span className='indicators'>
                {
                    carButton && (

                        images.map((image, index) => {
                            // si l'index correspond a l'index courant on ajoute une classe hiden au autres index en bas du carrousel
                            return <div key={index} className={slide === index ? "indicator" : "indicator indicator-hidden"} >{index + 1}/{images.length}</div>
                        })
                    )
                }
            </span>

        </div>
    );
};

export default Carrousel;