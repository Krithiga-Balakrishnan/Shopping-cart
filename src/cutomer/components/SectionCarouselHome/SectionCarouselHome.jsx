import React from 'react'
import AliceCarousel from 'react-alice-carousel'

const SectionCarouselHome = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };

    const items =[1,1,1,1,1].map((item)=><SectionCarouselHome/>)

  return (
    <div>
         <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
    </div>
  )
}

export default SectionCarouselHome