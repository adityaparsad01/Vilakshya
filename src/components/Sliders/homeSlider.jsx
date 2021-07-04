import React from 'react'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'

import {SliderData} from './SliderData'
import useStyles from './styles';

const HomeSlider = ()=>{
  const classes = useStyles();
  return (
    <section className={classes.slide}>
    <FaArrowAltCircleLeft className={classes.leftArrow}/>
    <FaArrowAltCircleRight className={classes.rightArrow}/>
    {
      SliderData.map((slides,index)=>((
          <img src={slides.image} alt='img' className={classes.image}/>
      )))
    }
    
    </section>
    )
}

export default HomeSlider
