import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SectionCardsHome from '../CardsInHome/sectionCardsHome'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';

const SectionCarouselHome = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 6 },
};

  const items = data.slice(0, 20).map((item) => <SectionCardsHome product={item} />);

  const slidePrev = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const slideNext = () => {
    setActiveIndex(prevIndex => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const syncActiveIndex=({item})=>setActiveIndex(item);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
      <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
          {/* {activeIndex !== items.length - 1 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: 'absolute',
              top: '8rem',
              right: '0rem',
              transform: "translateX(30%) rotate(90deg)",
              bgcolor: "white"
            }}
            aria-label="next"
          >
            <ArrowBackIosIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
          </Button>
        )} */}
    
    {/* {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: 'absolute',
              top: '8rem',
              left: '0rem',
              transform: "translateX(-30%) rotate(-90deg)",
              bgcolor: "white"
            }}
            aria-label="prev"
          >
            <ArrowBackIosIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default SectionCarouselHome;
