import React from "react"

import "./mobileEduListItem.scss"

export default function MobileEduListItem ({ index, data }) {
  const EDU_DATE = data.date;
  const MOBILE_DESC_WIDTH = window.innerWidth; 


  return (
    <div className="mobileEduListItem"
    >
      <div className="itemWrap">
        <div className="testWrap">
          <div className="imgWrap">
            <img src={process.env.PUBLIC_URL + data.img} alt="" />
            <div className="backColor"></div>
            <div className="title">
              {data.school}
              <div>{MOBILE_DESC_WIDTH < 680 && EDU_DATE }</div>
            </div>
            <div className="textWrap">
              <div className="decs">
                <div>{data.school} </div>
                <div className="edu"> {data.edu} 과 </div>
                <div className="date"> {data.date} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}