import { useRef, useState } from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "./list.scss"
 
const ITEM_WIDTH = 520;

export default function List(props) {
  const [sliderNumber, setSliderNumber] = useState(0)
  const listRef = useRef();

  const handleClick = (direction) => {
    if (direction === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1)
      listRef.current.style.transform = `translateX(${-ITEM_WIDTH * (sliderNumber - 1)}px)`
    }
    if (direction === "right" && sliderNumber < 5) {
      setSliderNumber(sliderNumber + 1)
      listRef.current.style.transform = `translateX(${-ITEM_WIDTH * (sliderNumber + 1)}px)`
    }
  }

  return (
    <div className={props.eduList}>
  
      <span className="listTitle">{props.title}</span>
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