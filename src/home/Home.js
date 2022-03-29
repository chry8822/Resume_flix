import { useContext, useState, useCallback, useEffect } from 'react';
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
import MobileListItem from '../component/listItem/MobileListItem';
import MobileEduListItem from '../component/listItem/MobileEduListItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import ListTitle from '../component/listTitle/ListTitle';

import "swiper/css"

export default function Home(props) { 
  let infoData = useContext(dataContext);
  const [modalIndex, setModalIndex] = useState(-1);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleClickListItem = (itemIndex) => {
    setModalIndex(itemIndex);
  }

  function openModal (itemIndex) {
    setModalIndex(itemIndex);
    //모달창 오픈시 바디 스크롤바 히든
    document.body.style.overflow ="hidden";
  }

  function closeModal () {
    setModalIndex(-1);
    document.body.style.overflow ="scroll";
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
      <Featured isMobileView={isMobileView}/>

    { 
      isMobileView && 
       (
        <div>
        <ListTitle title="Project"/>
         <Swiper
          spaceBetween={10}
          slidesPerView={1}  
        >
        {    
            infoData.map((data, index) =>
                (
                  <SwiperSlide>
                    <MobileListItem data={data} key={index} index={index} openModal={() => { openModal(index) }} />
                  </SwiperSlide>
                )
          )
        }
        </Swiper>
        </div>
        )
      }

      {
        isMobileView && (
          <div>
            <ListTitle title="Education"/>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}  
            >
            {
                eduData.map((data, index) =>
                    (
                      <SwiperSlide>
                        <MobileEduListItem data={data} key={index} index={index} />
                      </SwiperSlide>
                    )
                  )
            }
            </Swiper>
          </div>
        )
      }



        {
          !isMobileView && 
           <List title="Project" eduList="list">
            {
              infoData.map((data, index) =>
                (
                  <ListItem data={data} key={`${index}`} index={index} openModal={() => { openModal(index) }} />
                )
             )
            }
          </List>
        }

      {
        !isMobileView &&  
        <List title="Education" eduList="eduList list">
          {
            eduData.map((data, index) => (
              <EducationListItem data={data} key={`${index}`} index={index} />
            ))
          }
      </List>
      }


      {
        modalIndex !== -1 && <Modal>
          <ListModal data={infoData[modalIndex]} onClose={() => closeModal()} />
        </Modal>
      }

      <Footer />
    </div>
  )
}