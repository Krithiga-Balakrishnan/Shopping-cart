import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';
import './Carousel.css';


const MainCarousel = () => {
    const items = mainCarouselData.map((item) => (
        <img
            className='cursor-pointer carousel-image -z-10' // Apply the CSS class
            role='presentation'
            src={item.image}
            alt=""
            key={item.id}
        />
    ));

    return (
        <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
         autoPlay
         autoPlayInterval={1000}
         infinite
        />
    );
};

export default MainCarousel;
