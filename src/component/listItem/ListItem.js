import "./listItem.scss"
import { useState, useContext } from 'react';
import { dataContext } from './../../App';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Opacity, Translate } from "@material-ui/icons";


export default function ListItem() {
  let infoData = useContext(dataContext)
  const [isHovered, setIsHoverd] = useState(false)
  const [isHoverIndex, setIsHoverIndex] = useState(false)

  function changeOpacity (e, index){
    if(infoData[index].id === e.currentTarget[index]) {
      console.log(infoData[index].id)
      setIsHoverIndex(true)
    }
  };

  
  // const trailer = 
  return infoData.map((data, index) => (
    <div className="listItem" key={index}
      style={{ left: isHovered && index * 500 - 50 + index * 2.5 }}
      onMouseOver={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
      onMouseEnter={(e)=> changeOpacity(e.currentTarget)}
      onMouseLeave={()=> setIsHoverIndex(false)}
      >
      


      <div className="imgWrap">

        <img src={process.env.PUBLIC_URL + "/대문사진.jpg"} alt="" />
        <div className="title">Title : {infoData[index].title}</div>
      </div>


      <div className="itemInfo" 
        style={{ opacity : isHoverIndex === true ? 1 : 0 }}
      >
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
          <div>{infoData[index].stack}</div>
          <div>{infoData[index].desc}</div>
          <div>{infoData[index].fn}</div>
        </div>

      </div>

    </div>

  ));
}


