import "./educationList.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useRef, useState } from "react";
import EducationListItem from "../listItem/EducationListItem"

export default function EducationList() {
  const [isMoved, setIsMoved] = useState(false)
  const [sliderNumber, setSliderNumber] = useState(0)
  const listRef = useRef()

  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 60
    if(direction === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1)
      listRef.current.style.transform = `translateX(${500 + distance}px)`
    }
    if(direction === "right" && sliderNumber < 2) {
      setSliderNumber(sliderNumber + 1)
      listRef.current.style.transform = `translateX(${-500 + distance}px)`
    }
  }

  return (
    <div className="eduList">
      <span className="listTitle">Education</span>
      <div className="warpper">
        <ArrowBackIosIcon className="sliderArrow left" onClick={()=>handleClick("left")} style={{ display: !isMoved && "none" }}/>
        <div className="container" ref={listRef}>
          <EducationListItem />
        </div>
        <ArrowForwardIosIcon className="sliderArrow right" onClick={()=>handleClick("right")} />
      </div>
    </div>
  )
}
