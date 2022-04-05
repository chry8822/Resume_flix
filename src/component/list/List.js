import React, { useRef, useState } from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ListTitle from "../listTitle/ListTitle";

import "./list.scss"
 
const ITEM_WIDTH = 520;
const ITEM_WIDTH_MEDIA = 350;

export default function List(props) {
  const { title } = props
  const [sliderNumber, setSliderNumber] = useState(0)
  const listRef = useRef();
  let viewWidth = window.innerWidth;

  const handleClick = (direction) => {
    console.log(ITEM_WIDTH_MEDIA )
    
    if (direction === "left" && sliderNumber > 0 && viewWidth > 640) {
      setSliderNumber(sliderNumber - 1)
      listRef.current.style.transform = `translateX(${-ITEM_WIDTH * (sliderNumber - 1)}px)`
    }
    // else if(direction === "left" && sliderNumber > 0 && viewWidth < 640) {
    //   setSliderNumber(sliderNumber - 1)
    //   listRef.current.style.transform = `translateX(${-ITEM_WIDTH_MEDIA  * (sliderNumber - 1)}px)`
    // }

    if (direction === "right" && sliderNumber < 4 && viewWidth > 640) {
      setSliderNumber(sliderNumber + 1)
      listRef.current.style.transform = `translateX(${-ITEM_WIDTH * (sliderNumber + 1)}px)`
    } 
    // else if(direction === "right" && sliderNumber < 4 && viewWidth < 640){
    //   setSliderNumber(sliderNumber + 1)
    //   listRef.current.style.transform = `translateX(${-ITEM_WIDTH_MEDIA * (sliderNumber + 1)}px)`
    // }
  }

  return (
    <div className={props.eduList}>
      <ListTitle title ={title}/>
      <div className="warpper">
        <ArrowBackIosIcon className="sliderArrow left" onClick={() => handleClick("left")}
         style={{ display: sliderNumber === 0 && "none" }} 
         />
        <div className="container" ref={listRef}>
          { props.children }
        </div>
        <ArrowForwardIosIcon className="sliderArrow right" onClick={() => handleClick("right")} />
      </div>

    </div>
  )
}