import './modal.css';
import React from 'react'
import TemplateEditor from './templateeditor'


const Modal = ({ i,handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
        {console.log(i)}
      <section className="modal-main">
      <TemplateEditor id={i}/>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
export default Modal;