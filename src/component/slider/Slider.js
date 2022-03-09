import { FunctionsTwoTone } from '@material-ui/icons'
import React, { useState, useEffect, useCallback } from 'react'
import "./slider.scss"
import sliderData from "./sliderData"

const INTERVAL_TIME = 5000;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = sliderData.length;


  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      return prevSlide === slideLength - 1 ? 0 : prevSlide + 1
    })
  }

  function startAutoRollingSlide() {
    setInterval(nextSlide, INTERVAL_TIME)
  }

  useEffect(() => {
    // 마운트시 최초한번
    startAutoRollingSlide();
    // 언마운시 최초한번
  }, [])

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