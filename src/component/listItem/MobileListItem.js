import React from "react";
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import "./mobileListItem.scss"
import "swiper/css"


export default function MobileListItem(props) {
  const { data,openModal } = props;


  return (
         <div className="mobileListItem "
            onClick={openModal}
         >
          <div className="itemWrap">
            <div className="testWrap">
              <div className="imgWrap">
                <video className="imgShow" src={process.env.PUBLIC_URL + data.gif} poster={process.env.PUBLIC_URL + data.img}
                  loop muted="muted" playsInline></video>
                <div className="title">{data.title}</div>
              </div>
              <div className="itemInfo">
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