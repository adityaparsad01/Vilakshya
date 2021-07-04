import React,{useState} from 'react'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'

import {SliderData} from './SliderData'
import useStyles from './styles';

const HomeSlider = ()=>{
  const classes = useStyles();
  const [current,setCurrent]=useState(0)
  const length = SliderData.lenght
  
  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }
  
  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1)
  }
  
  if (!Array.isArray(SliderData) || SliderData.lenght <= 0) {
    return null
  }
  
  return (
    <section className={classes.slide}>
    <FaArrowAltCircleLeft className={classes.leftArrow} onClick={prevSlide}/>
    <FaArrowAltCircleRight className={classes.rightArrow} onClick={nextSlide}/>
    {
      SliderData.map((slides,index)=>((
        <div className={index === current ? 'active slide ' : 'slide'} key={index}>
        {index === current && (
        <img src={slides.image} alt='img' className={classes.image}/>
        )}
        </div>
      )))
    }
    </section>
    )
}
export default HomeSlider
