import "./listItem.scss"
import { useState, useContext } from 'react';
import { dataContext } from './../../App';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


export default function ListItem() {
  let infoData = useContext(dataContext)
  const [hoverIndex, setHoverIndex] = useState(-1);

  const hoveredStyle = {
    opacity: 1,
  }


  function playVideo (index) {
    return hoverIndex === index 
    ? hoverIndex === index && process.env.PUBLIC_URL + infoData[index].gif 
    : ""
  }
 


  return infoData.map((data, index) => (
    <div className="listItem"
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(-1)}
    >
      <div className="itemWrap">
        <div className="testWrap">
          <div className="imgWrap">
         
              <video className="imgShow" src={playVideo(index)} poster={process.env.PUBLIC_URL + infoData[index].img}
              autoPlay loop muted="muted"></video>

            <div className="title">{infoData[index].title}</div>
          </div>
          <div className="itemInfo"
            style={hoverIndex === index ? hoveredStyle : {}}>
            <div className="icons">
              <button onClick={() => window.open(`${infoData[index].link}`, "_blank")}>
                <PlayCircleFilledWhiteOutlinedIcon className="icon" />
                <span>Move to Web</span>
              </button>
              <button onClick={() => window.open(`${infoData[index].git}`, "_blank")}>
                <AddCircleOutlineOutlinedIcon className="icon" />
                <span>Move to git</span>
              </button>
            </div>
            <div className="infoWrap">
              <div className="infoTime">{infoData[index].time} <span className="infoTimeNotice">New</span> </div>
              <FiberManualRecordIcon className="dot" />
              <div>{infoData[index].stack}</div>
              <FiberManualRecordIcon className="dot" />
              <div>{infoData[index].desc}</div>
              <FiberManualRecordIcon className="dot" />
              <div>{infoData[index].fn}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  ));
}


