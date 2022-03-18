import { useContext, useState } from 'react';
import Navbar from "../component/navbar/Navbar"
import Featured from './../component/featured/Featured';
import List from './../component/list/List';
import EducationListItem from '../component/listItem/EducationListItem';
import Footer from "../component/footer/Footer";
import ListItem from '../component/listItem/ListItem';
import eduData from '../eduData';
import { dataContext } from '../App';
import ListModal from '../component/ListModal/ListModal';
import "./home.scss"
import Modal from '../component/Modal/Modal';

export default function Home(props) {
  let infoData = useContext(dataContext);
  const [modalIndex, setModalIndex] = useState(-1);

  const handleClickListItem = (itemIndex) => {
    setModalIndex(itemIndex);
  }
  return (
    <div className="home">
      <button onClick={props.pageToHome} className="moveTop">
        <img src={process.env.PUBLIC_URL + "/TopArrow.png"} alt="" />
      </button>
      <Navbar pageToHome={props.pageToHome} />
      <Featured />
      
      <List title="Project" eduList="list">
        {
          infoData.map((data, index) => 
            (<ListItem data={data} key={`${index}`} index={index} handleClickListItem={() => { handleClickListItem(index) }}/>)
          )
        }
      </List>

      <List title="Education" eduList="eduList list">
        {eduData.map((data, index) => (
          <EducationListItem data={data} key={`${index}`} index={index} />
        ))}
      </List>

      {
        modalIndex !== -1 && <Modal>
          <ListModal data={infoData[modalIndex]} onClose={() => {setModalIndex(-1)}} />
          </Modal>
      }

      <Footer />
    </div>
  )
}