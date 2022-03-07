import { FunctionsTwoTone } from '@material-ui/icons'
import React ,{ useState, useEffect } from 'react'
import "./slider.scss"
import sliderData from "./sliderData"

const Slider = () => {
  const[currentSlide, setCurrentSlide] = useState(0)
  const slideLength = sliderData.length;
  //slideLength 1 2 3 4
  //currentSlide = 0 1 2 3

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    console.log(currentSlide)
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }


  useEffect(()=>{
    setCurrentSlide(0)
  }, [])

  useEffect(()=>{
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide])


  return (
    <div className='slider'>
      {sliderData.map((slide, index) => {
        return (
          <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
            {index === currentSlide && (
              <img onClick={nextSlide} src={slide.img} alt="" />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Slider