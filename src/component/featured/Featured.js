import { Profiler, useState, useRef } from "react"
import "./featured.scss"
import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Slider from "../slider/Slider";


export default function Featured() {
  const [isAboutZoomed, setisAboutZoomed] = useState(false);
  const [isHoverd, setIsHoverd] = useState(false);

  function toggleZoom() {
    if (isAboutZoomed) {
      setisAboutZoomed(false)
    } else {
      setisAboutZoomed(true)
    }
  }

  function toggleName() {
    if (isHoverd) {
      setIsHoverd(false)
    } else {
      setIsHoverd(true)
    }
  }

  function renderYear() {
    if (isAboutZoomed) {
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


  const changeDescStyle = {
    fontSize: "20px",
    lineHeight: "35px",
    transition: "all 0.3s",
    marginTop: "10px"
  }

  return (
    <div className="featured">

      <Slider />

      <div className="myName"
        onClick={toggleName}
      >
        {isHoverd ? "오국화" : "OH KUK HWA"}
      </div>
      <div className="yearWrap"
        style={{ width: isAboutZoomed ? "180px" : "120px" }}>
        <div className="year"
        >{isAboutZoomed ? '1990' : '90'}</div>
      </div>
      <div className="infoWrap">
        <div className="info"
          style={isAboutZoomed ? changeInfoStyle : {}}
        >
          <div className="title"
            style={{ fontSize: isAboutZoomed ? "40px" : "" }}>
            {isAboutZoomed && "About me"}
          </div>
          <ul className="desc"
            style={isAboutZoomed ? changeDescStyle : {}}
          >
            <div className="descTitle">
              'Keep true to the dreams of thy youth' <br />
              "당신이 젊은 시절 꿈꾸었던 것에 충실하라"
            </div>
            <div
              style={{ display: isAboutZoomed ? "block" : "none" }}
            >
              <li>
                <FiberManualRecordIcon className="dot" /> 안녕하세요 프론트엔드 개발자로서 꿈을 이루어 가는 오국화 입니다!
              </li>
              <li>
                <FiberManualRecordIcon className="dot" /> 누군가와 함께 배우고 공부하기 위해서 github와 블로그를 운영하고 있습니다.
              </li>
              <li>
                <FiberManualRecordIcon className="dot" /> 일관성과 꾸준함을 받쳐 줄 수 있는 체력을 위해서 주 4일 이상은 운동을 합니다.
              </li>
              <li>
                <FiberManualRecordIcon className="dot" /> 항상 모르는 것에 대해 탐구하고 손으로 써보며 이해 하는걸 좋아합니다.
              </li>
              <li>
                <FiberManualRecordIcon className="dot" /> 함께 커피 마시고 지식을 나누고 성장할 때 성취감을 느낍니다.
              </li>
              <div className="skillWrapper">
                <span className="skills">SKILL</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>SASS</span>
              </div>
            </div>
          </ul>
          <div className="buttons">
            <button className="more"
              onClick={() => toggleZoom()}
            >
              <InfoOutlined />
              <span>{isAboutZoomed ? "작게보기" : "내용보기"}</span>
            </button>
            <a className="download" href={process.env.PUBLIC_URL + "/resume.pdf"} target="_new" download>
              <PlayArrow />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
