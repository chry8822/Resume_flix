import "./listItem.scss"
import { useState, useRef } from 'react';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function ListItem(props) {
  const { data, index } = props;
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [isActive, setIsActive] = useState(false);

  const hoveredStyle = {
    opacity: 1,
  }


  function playVideo(index) {
    return hoverIndex === index
      ? hoverIndex === index && process.env.PUBLIC_URL + data.gif
      : "";
  }

  return (
    <div className="listItem"
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(-1)}
    >
      <div className={isActive ? "itemWrap modal" : "itemWrap"}>
        <div className={`testWrap ${isActive ? 'modal' : ''}`}
          onClick={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          <div className="imgWrap">
            <video className="imgShow" src={playVideo(index)} poster={process.env.PUBLIC_URL + data.img}
              autoPlay loop muted="muted"></video>
            <div className="title">{data.title}</div>
          </div>
          <div className="itemInfo"
            style={hoverIndex === index ? hoveredStyle : {}}>
            <div className="icons">
              <button onClick={() => window.open(`${data.link}`, "_blank")}>
                <PlayCircleFilledWhiteOutlinedIcon className="icon" />
                <span>Move to Web</span>
              </button>
              <button onClick={() => window.open(`${data.git}`, "_blank")}>
                <AddCircleOutlineOutlinedIcon className="icon" />
                <span>Move to git</span>
              </button>
            </div>
            <div className="infoWrap">
              <div className="infoTime">
                {data.time}
                <span className="infoTimeNotice">New</span>
              </div>

              <div className="infoDecsWrap">
                <div>
                  <FiberManualRecordIcon className="dot" />
                  <div>{data.stack}</div>
                </div>
                <div>
                  <FiberManualRecordIcon className="dot" />
                  <div>{data.desc}</div>
                </div>
                <div>
                  <FiberManualRecordIcon className="dot" />
                  <div>{data.fn}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


