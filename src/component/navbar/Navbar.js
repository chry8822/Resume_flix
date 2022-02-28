import "./navbar.scss"
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import { useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }

  console.log(isScrolled)
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={process.env.PUBLIC_URL + '/mainlogo.png'} alt="" />
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>SASS</span>
        </div>
        <div className="right">
            <Search className="icon"/>
          <span>Develope KID</span>
          <div className="notice">
              <Notifications className="icon"/>
              <div className="options">
                  <span>무엇이든 알려주세요!</span>
              </div>
          </div>
          <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="" />
          <div className="profile">
            <ArrowDropDown className="icon"/>
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
