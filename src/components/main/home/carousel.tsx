'use client'

import { Carousel as ReactCarousel } from "react-bootstrap";
import "@/style/components/carousel.css";

const Carousel = ({carouselStyle}: {carouselStyle: string}) => {
    return (
        <ReactCarousel className={`carousel-container ${carouselStyle}`}>
            <ReactCarousel.Item style={{borderRadius: '15px;'}} >
                <img 
                    src="/home/BANNER_MAGISTER_HORARIO_DAAF_2023.gif" 
                    className="w-100" 
                    style={{borderRadius: '15px;'}} 
                    alt="banner" 
                />
            </ReactCarousel.Item>
            <ReactCarousel.Item style={{borderRadius: '15px;'}} >
                <img 
                    src="/home/BANNER_MAGISTER_HORARIO_DAAF_2023.gif" 
                    className="w-100" 
                    style={{borderRadius: '15px;'}} 
                    alt="banner" 
                />
            </ReactCarousel.Item>
            <ReactCarousel.Item style={{borderRadius: '15px;'}} >
                <img 
                    src="/home/BANNER_MAGISTER_HORARIO_DAAF_2023.gif" 
                    className="w-100" 
                    style={{borderRadius: '15px;'}} 
                    alt="banner" 
                />
            </ReactCarousel.Item>
        </ReactCarousel>
    )
}

export default Carousel