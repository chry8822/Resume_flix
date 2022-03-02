import "./home.scss"
import Navbar from "../component/navbar/Navbar"
import Featured from './../component/featured/Featured';
import List from './../component/list/List';
import EducationList from './../component/list/EducationList';
import Footer from "../component/footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured/>
      <List />
      <EducationList />
      <Footer />
    </div>
  )
}
