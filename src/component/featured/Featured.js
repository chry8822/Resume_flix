import { Profiler, useState } from "react"
import "./featured.scss"
import { PlayArrow, InfoOutlined } from "@material-ui/icons";


export default function Featured() {

  const [isClicked, setIsClicked] = useState(false);

  function aboutToggle() {
    if (isClicked === true) {
      setIsClicked(false)
    } else {
      setIsClicked(true)
    }
  }

  const changeInfoStyle = {
    width: "30%",
    // height: "50%",
    bottom: "5%",
    backgroundColor: "rgba(0,0,0,0.5)"

  }

  const changeButtonStyle = {
    marginTop: "60px"
  }

  const changeDescStyle = {
    fontSize: "23px",

  }


  return (
    <div className="featured">
      <img src={process.env.PUBLIC_URL + "/대문사진.jpg"} alt="" />
      <div className="myName">OH KUK HWA</div>
      <div className="yearWrap">
        <div className="year">90</div>
      </div>


      <div className="infoWrap"
        onMouseLeave={() => setIsClicked(false)}
      >
        <div className="info"
          style={isClicked === true ? changeInfoStyle : {}}
        >
          <div className="title"
            style={{ fontSize: isClicked === true ? "60px" : "" }}
          >About me</div>
          <span className="desc"
            style={isClicked === true ? changeDescStyle : {}}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ratione quas, a explicabo, quibusdam error reprehenderit possimus soluta ipsum eum voluptates quae, accusamus ipsam. Ullam praesentium doloribus exercitationem sunt fuga vero hic, optio suscipit! Ab corporis, architecto exercitationem nostrum ex quia modi voluptates corrupti omnis nesciunt dolorem laborum labore quae impedit. Fuga deleniti repellat quo laborum accusantium atque blanditiis voluptatum veritatis nesciunt quas
          </span>
          <div className="buttons"
            style={isClicked === true ? changeButtonStyle : {}}
          >
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
            <button className="more"

              onClick={() => aboutToggle()}

            >
              <InfoOutlined />
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
