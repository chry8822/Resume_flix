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




  return infoData.map((data, index) => (
    <div className="listItem"
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(-1)}
    >
      <div className="itemWrap">
        <div className="imgWrap">
          <img src={process.env.PUBLIC_URL + "/대문사진.jpg"} alt="" />
          <div className="title">Title : {infoData[index].title}</div>
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
            <div>{infoData[index].time}</div>
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

  ));
}


