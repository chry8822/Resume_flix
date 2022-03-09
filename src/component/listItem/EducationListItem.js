import "./educationListItem.scss"
import { useState } from 'react';

export default function EducationListItem({ index, data }) {
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <div className="eduListItem"
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(-1)}
    >
      <div className="itemWrap">
        <div className="testWrap">
          <div className="imgWrap">
            <img src={process.env.PUBLIC_URL + data.img} alt="" />
            <div className="backColor"></div>
            <div className="title">{data.school}</div>
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

  );
}





