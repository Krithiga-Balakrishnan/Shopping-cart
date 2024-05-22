import React from 'react'
import MainCarousel from '../../components/CarouselHome/MainCarousel'
import SectionCarouselHome from '../../components/SectionCarouselHome/SectionCarouselHome'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div>
            <SectionCarouselHome/>
        </div>
    </div>
  )
}

export default HomePage