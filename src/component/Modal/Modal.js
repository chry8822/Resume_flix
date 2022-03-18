import ReactDOM from 'react-dom';
import './Modal.scss';

export default function Modal({children}) {
  return ReactDOM.createPortal(
    children,
    document.getElementById('modal')
  );
}