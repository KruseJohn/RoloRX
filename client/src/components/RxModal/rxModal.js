import React from 'react';
import './rxModal.css';

const RxModal = ({ handleClose, show, children }) => {

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
  return ( 
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="col-md-3 mx-auto">
        <button className="standard-btn" id='modal' onClick={handleClose}>CLOSE</button>
        </div>
      </section>
    </div>
   
  )
}

export default RxModal;