
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import "./listModal.scss"

export default function ListModal(props) {
  const { data, onClose } = props;


  return (
    <>
      <div className="backdrop" onClick={onClose}></div>
      <div className="ModalListItem">
        <div className="itemWrap">
          <div className="testWrap">
            <img className='closeModal' onClick={onClose} src={process.env.PUBLIC_URL + "./닫기버튼.png"}/>
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
                    <div>{data.stack}</div>
                  </div>
                  <div>
                    <div>{data.desc}</div>
                  </div>
                  <div>
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


