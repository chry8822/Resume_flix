import "./listItem.scss"
import { useState, useRef, useEffect, useCallback } from 'react';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function ListItem(props) {
  const { data,openModal } = props;
  const [hoverIndex, setHoverIndex] = useState(false);
  const testWrapRef = useRef();
   /**
    * {
    *   current: undefined
    * }
    */



  // 작아지는 애니메이션이 끝났을때 기존 z-index 값 1로 되돌리기 위한 함수
  const onMouseLeaveTransitionEnd = useCallback(() => {
    testWrapRef.current.style.zIndex = 1;
    testWrapRef.current.removeEventListener('transitionend', onMouseLeaveTransitionEnd);
  }, [])

  // [NOTE]: 마우스 호버시 zIndex 3으로 젤 높게 설정 (모든 리스트중에서 가장 위에 보임)
  // 이벤트를 해제 하기 위해서 한번만 생성하기 위해서 useCallback 을 사용
  const onMouseEnter = useCallback(() => {
    testWrapRef.current.removeEventListener('transitionend', onMouseLeaveTransitionEnd);
    testWrapRef.current.style.zIndex = 3;
  }, []);

  // [NOTE]: 마우스 호버 끝낫을때 zIndex 2로 설정, 작아지기 시작할때, 내가 가리고 있는 내 오른쪽 아이템보다 높은 zIndex를 가지기 위함, 
  const onMouseLeave = useCallback(() => {
    testWrapRef.current.style.zIndex = 2;
    // [NOTE]: 작아지는 애니메이션(transition)이 끝나면, zIndex 1로 설정해서 기본값으로 맞춤
    testWrapRef.current.addEventListener('transitionend', onMouseLeaveTransitionEnd);
  }, []);

  
  useEffect(() => {
    // if(testWrapRef.current) {
      testWrapRef.current.addEventListener('mouseenter', onMouseEnter);
      testWrapRef.current.addEventListener('mouseleave',onMouseLeave)
    // }
  }, []);

  // 마운트될때 이벤트를 한번만 걸기 위해서

  // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  const hoveredStyle = {
    opacity: 1,
  }

  function playVideo() {
    return hoverIndex
      ? process.env.PUBLIC_URL + data.gif
      : "";
  }

  return (
    <>
      <div className="listItem "
        // onClick={()=> setIsActive(true) }
        onClick={openModal}
        onMouseEnter={() => setHoverIndex(true)}
        onMouseLeave={() => setHoverIndex(false)}
        ontouchstart=""
      >
        <div className="itemWrap">
          <div className="testWrap"
            ref={testWrapRef}
          >
            <div className="imgWrap">
              <video className="imgShow" src={playVideo()} poster={process.env.PUBLIC_URL + data.img}
                autoPlay loop muted="muted" playsInline></video>
              <div className="title">{data.title}</div>
            </div>
            <div className="itemInfo"
              style={hoverIndex ? hoveredStyle : {}}>
              <div className="icons">
                <button onClick={() => window.open(`${data.link}`, "_blank")}>
                  <PlayCircleFilledWhiteOutlinedIcon className="icon" />
                  <span>Move to Web</span>
                </button>
                <button onClick={() => window.open(`${data.git}`, "_blank")}>
                  <AddCircleOutlineOutlinedIcon className="icon" />
                  <span>Move to git</span>
                </button>
              </div>
              <div className="infoWrap">
                <div className="infoTime">
                  {data.time}
                  <span className="infoTimeNotice">New</span>
                </div>

                <div className="infoDecsWrap">
                  <div>
                    <FiberManualRecordIcon className="dot" />
                    <div>{data.stack}</div>
                  </div>
                  <div>
                    <FiberManualRecordIcon className="dot" />
                    <div>{data.desc}</div>
                  </div>
                  <div>
                    <FiberManualRecordIcon className="dot" />
                    <div>{data.fn}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {
        isActive &&
        <ListModal data={data} index={index} onModalClose={() => setIsActive(false)} ref={testWrapRef}/>
      } */}

    </>
    
  )
}


