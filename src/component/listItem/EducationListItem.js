import "./educationListItem.scss"
import { useState, useContext } from 'react';
import { dataContext } from './../../App';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import eduData from "../../eduData";


export default function EducationListItem() {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const hoveredStyle = {
    opacity: 0.9,
  }




  return eduData.map((data, index) => (
    <div className="eduListItem"
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(-1)}
    >
      <div className="itemWrap">
        <div className="testWrap">
          <div className="imgWrap">
              <img src={process.env.PUBLIC_URL + eduData[index].img} alt="" />
              <div className="backColor"></div>
                <div className="title">{eduData[index].school}</div>
             <div className="textWrap">
                <div className="decs"> 
                  <div>{eduData[index].school} </div>
                  <div className="edu"> {eduData[index].edu} 과 </div>
                  <div className="date"> {eduData[index].date}   </div>
                </div> 
             </div>
          </div>
        </div>
      </div>
    </div>

  ));
}


