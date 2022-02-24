import "./home.scss"
import Navbar from "../component/navbar/Navbar"
import Featured from './../component/featured/Featured';

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie"/>
    </div>
  )
}
