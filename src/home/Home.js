import { Component, useContext, useState, useCallback, useEffect } from 'react';
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
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function Home(props) { 
  let infoData = useContext(dataContext);
  const [modalIndex, setModalIndex] = useState(-1);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleClickListItem = (itemIndex) => {
    setModalIndex(itemIndex);
  }

  const onResize = useCallback(() => {
    console.log('onResize');
    setIsMobileView(window.innerWidth < 680);
  }, [])

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, []);

  console.log('isMobileView', isMobileView);

  return (
    <div className="home">
      <button onClick={props.pageToHome} className="moveTop">
        <img src={process.env.PUBLIC_URL + "/TopArrow.png"} alt="" />
      </button>
      <Navbar pageToHome={props.pageToHome} />
      <Featured />

      <List title="Project" eduList="list">
        {
          isMobileView && (
            <Swiper
              spaceBetween={10}
              slidesPerView={1}>
            {
              infoData.map((data, index) =>
                (
                  <SwiperSlide>
                    <ListItem data={data} key={`${index}`} index={index} handleClickListItem={() => { handleClickListItem(index) }} />
                    {/* {index} */}
                  </SwiperSlide>
                )
              )
            }
            </Swiper>
          )
        }
        {
          !isMobileView && 
            infoData.map((data, index) =>
              (
                <ListItem data={data} key={`${index}`} index={index} handleClickListItem={() => { handleClickListItem(index) }} />
              )
            )
        }
      </List>

      <List title="Education" eduList="eduList list">
          {
            eduData.map((data, index) => (
              
              <EducationListItem data={data} key={`${index}`} index={index} />
            ))
          }
      </List>

      {
        modalIndex !== -1 && <Modal>
          <ListModal data={infoData[modalIndex]} onClose={() => { setModalIndex(-1) }} />
        </Modal>
      }

      <Footer />
    </div>
  )
}