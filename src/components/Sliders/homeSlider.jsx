import React from 'react'

import {SliderData} from './SliderData'

const HomeSlider = ()=>{
  return (
    <>
    {
      SliderData.map((slides,index)=>((
          <img src={slides.image} alt='img'/>
      )))
    }
    </>
    )
}

export default HomeSlider