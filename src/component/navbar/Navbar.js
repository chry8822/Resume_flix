import "./navbar.scss"
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import { useState } from "react";

export default function Navbar(props) {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }


  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img onClick={props.pageToHome} src={process.env.PUBLIC_URL + '/mainlogo.png'} alt="" />
          <div className="snsWrapper">
            <a href="https://github.com/chry8822" target="_blank">
              <img src={process.env.PUBLIC_URL + '/깃허브.png'} />
              <div>git-hub</div>
            </a>
            <a href="https://covelope.tistory.com/" target="_blank">
              <img src={process.env.PUBLIC_URL + '/티스토리.png'} />
              <div>Blog</div>
            </a>
          </div>
        </div>
        <div className="right">
          <span>Develope KID</span>
          <div className="notice">
            <Notifications className="icon" />
            <div className="options">
              <span>무엇이든 알려주세요!</span>
            </div>
          </div>
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Phone : 010-7197-3084</span>
              <span>Email : goggg8822@naver.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
