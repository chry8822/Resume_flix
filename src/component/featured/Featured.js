import { Profiler, useState, useRef } from "react"
import "./featured.scss"
import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Slider from "../slider/Slider";


export default function Featured() {
  const [isActive, setisActive] = useState(false);

  function aboutToggle() {
    if (isActive === true) {
      setisActive(false)
    } else {
      setisActive(true)
    }
  }

  function yearActive() {
    if (isActive === true) {
      return "1990"
    } else {
      return "90"
    }
  }

  const changeInfoStyle = {
    padding: "20px 30px 20px 30px",
    bottom: "5%",
    backgroundColor: "rgba(0,0,0,0.5)",
    transition: "all 0.3s"
  }

  const changeButtonStyle = {
    marginTop: "40px"
  }

  const changeDescStyle = {
    fontSize: "23px",
    lineHeight: "40px",
    transition: "all 0.3s"
  }

  return (
    <div className="featured">

        <Slider />

      <div className="myName"></div>
      <div className="yearWrap">
        <div className="year"
          onClick={() => { isActive(true) }}
        >{yearActive()}</div>
      </div>
      <div className="infoWrap"
        onMouseLeave={() => setisActive(false)}
      >
        <div className="info"
          style={isActive === true ? changeInfoStyle : {}}
        >
          <div className="title"
            style={{ fontSize: isActive === true ? "60px" : "" }}
          >About me</div>
          <span className="desc"
            style={isActive === true ? changeDescStyle : {}}
          >
            <div>
              'Keep true to the dreams of thy youth' <br />
              당신이 젊은 시절 꿈꾸었던 것에 충실하라’
            </div>
            <FiberManualRecordIcon className="dot" /> 안녕하세요 프론트엔드 개발자로서 꿈을 이루어 가는 오국화 입니다!  <br />
            <FiberManualRecordIcon className="dot" /> 누군가와 함께 배우고 공부하기 위해서 github와 블로그를 운영하고 있습니다.  <br />
            <FiberManualRecordIcon className="dot" /> 일관성과 꾸준함을 받쳐 줄 수 있는 체력을 위해서 주 4일 이상은 운동을 합니다.  <br />
            <FiberManualRecordIcon className="dot" /> 항상 모르는 것에 대해 탐구하고 손으로 써보며 이해 하는걸 좋아합니다.  <br />
            <FiberManualRecordIcon className="dot" /> 함께 커피 마시고 지식을 나누고 성장할 때 성취감을 느낍니다.
          </span>
          <div className="buttons"
            style={isActive === true ? changeButtonStyle : {}}
          >
            <button className="more"
              onClick={() => aboutToggle()}
            >
              <InfoOutlined />
              <span>크게보기</span>
            </button>
            <button className="play">
              <PlayArrow />
              <a href={process.env.PUBLIC_URL + "/resume.pdf"} target="_new" download>Download Resume</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
