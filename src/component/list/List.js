import "./list.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ListItem from './../listItem/ListItem';
import { useRef, useState } from "react";


export default function List() {
  const [isMoved, setIsMoved] = useState(false)
  const [sliderNumber, setSliderNumber] = useState(0)
  const listRef = useRef()

  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 60
    if (direction === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1)
      listRef.current.style.transform = `translateX(${500 + distance}px)`
    }
    if (direction === "right" && sliderNumber < 2) {
      setSliderNumber(sliderNumber + 1)
      listRef.current.style.transform = `translateX(${-500 + distance}px)`
    }
    console.log(distance)
  }

  return (
    <div className="list">
      <span className="listTitle">Project</span>
      <div className="warpper">
        <ArrowBackIosIcon className="sliderArrow left" onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }} />
        <div className="container" ref={listRef}>
          <ListItem />
        </div>
        <ArrowForwardIosIcon className="sliderArrow right" onClick={() => handleClick("right")} />
      </div>

    </div>
  )
}
