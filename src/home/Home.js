import "./home.scss"
import Navbar from "../component/navbar/Navbar"
import Featured from './../component/featured/Featured';
import List from './../component/list/List';
import EducationList from '../component/eduList/EducationList';
import Footer from "../component/footer/Footer";


export default function Home(props) {
  return (
    <div className="home">
      <button onClick={props.pageToHome} className="moveTop">
        <img src={process.env.PUBLIC_URL + "/TopArrow.png"} alt="" />
      </button>
      <Navbar pageToHome={props.pageToHome} />
      <Featured />
      <List />
      <EducationList />
      <Footer />
    </div>
  )
}
