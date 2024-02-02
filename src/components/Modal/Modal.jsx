import { createPortal } from "react-dom";
import "./Modal.scss";

const Modal = ({ children, isOpen, wrapperId, handleClose }) => {
  if (!isOpen) return null;

  return createPortal(<div className="modal">{children}</div>, document.body);
};

export default Modal;
