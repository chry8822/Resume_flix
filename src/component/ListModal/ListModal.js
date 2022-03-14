import { useState, useRef, useEffect, useCallback } from 'react';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import "./listModal.scss"

export default function ListModal(props) {
  const { data, index } = props;
  const [isActive, setIsActive] = useState(false);
  const [modalLeftOffset, setModalLeftOffset] = useState(0);

  
  const itemWrapRef = useRef();
  const testWrapRef = useRef();


  const onMouseLeaveTransitionEnd = useCallback(() => {
    testWrapRef.current.style.zIndex = 1;

    testWrapRef.current.removeEventListener('transitionend', onMouseLeaveTransitionEnd);
  }, [])

  // [NOTE]: 마우스 호버시 zIndex 3으로 젤 높게 설정 (모든 리스트중에서 가장 위에 보임)
  const onMouseEnter = useCallback(() => {
    testWrapRef.current.style.zIndex = 3;
  }, []);

  // [NOTE]: 마우스 호버 끝낫을때 zIndex 2로 설정, 작아지기 시작할때, 내가 가리고 있는 내 오른쪽 아이템보다 높은 zIndex를 가지기 위함, 
  const onMouseLeave = useCallback(() => {
    testWrapRef.current.style.zIndex = 2;
    // [NOTE]: 작아지는 애니메이션(transition)이 끝나면, zIndex 1로 설정해서 기본값으로 맞춤
    testWrapRef.current.addEventListener('transitionend', onMouseLeaveTransitionEnd);
  }, []);

  useEffect(() => {
    if(testWrapRef.current) {  
      testWrapRef.current.addEventListener('mouseenter', onMouseEnter);
      testWrapRef.current.addEventListener('mouseleave',onMouseLeave)
    }
  }, []);


  const onModalOpen = () => {
    // 위치 계산해가지고 modalStyle를 만든다
    const totalWidth = window.innerWidth;
    const modalWidth = 800;
    let leftOffset = (totalWidth - modalWidth) / 2;
    if (itemWrapRef.current) {
      const el = itemWrapRef.current;
      const boundingRect = el.getBoundingClientRect();
      leftOffset -= boundingRect.x;
    }
    console.log('leftOffset', leftOffset, isActive);
    setModalLeftOffset(leftOffset);

    // 브라우저의 현재너비
    setIsActive(true);
  }

  return (
    <>
      <div className="ModalListItem" >
        <div className="itemWrap">
          <div className="testWrap">
            <div className="imgWrap">
              <video className="imgShow" src={process.env.PUBLIC_URL + data.gif} autoPlay loop muted="muted"></video>
              <div className="title">{data.title}</div>
            </div>
            <div className="itemInfo">
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
    </>
  )
}


