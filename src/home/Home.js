import "./home.scss"
import Navbar from "../component/navbar/Navbar"
import Featured from './../component/featured/Featured';
import List from './../component/list/List';

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured/>
      <List />
      <List />
      <List />
    </div>
  )
}
