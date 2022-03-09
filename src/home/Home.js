import { useContext } from 'react';
import Navbar from "../component/navbar/Navbar"
import Featured from './../component/featured/Featured';
import List from './../component/list/List';
import EducationListItem from '../component/listItem/EducationListItem';
import Footer from "../component/footer/Footer";
import ListItem from '../component/listItem/ListItem';
import eduData from '../eduData';
import { dataContext } from '../App';

import "./home.scss"

export default function Home(props) {
  let infoData = useContext(dataContext)
  return (
    <div className="home">
      <button onClick={props.pageToHome} className="moveTop">
        <img src={process.env.PUBLIC_URL + "/TopArrow.png"} alt="" />
      </button>
      <Navbar pageToHome={props.pageToHome} />
      <Featured />
      
      <List title="Project">
        {
          infoData.map((data, index) => 
            (<ListItem data={data} key={`${index}`} index={index}/>)
          )
        }
      </List>

      <List title="Education">
        {eduData.map((data, index) => (
          <EducationListItem data={data} key={`${index}`} index={index} />
        ))}
      </List>

      <Footer />
    </div>
  )
}