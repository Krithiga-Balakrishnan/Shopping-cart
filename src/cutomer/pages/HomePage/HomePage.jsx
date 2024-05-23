import React from 'react'
import MainCarousel from '../../components/CarouselHome/MainCarousel'
import SectionCarouselHome from '../../components/SectionCarouselHome/SectionCarouselHome'
import { kurtaPage1 } from '../../../Data/kurtaPage1'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div>
          <div className='space-y-10 py-8 flex flex-col justify-center px-5 lg:px-10'></div>
            <SectionCarouselHome data={kurtaPage1} sectionName={"Kurta Ladies"}/>
            <SectionCarouselHome data={kurtaPage1}/>
            <SectionCarouselHome data={kurtaPage1}/>
            <SectionCarouselHome data={kurtaPage1}/>

        </div>
    </div>
  )
}

export default HomePage