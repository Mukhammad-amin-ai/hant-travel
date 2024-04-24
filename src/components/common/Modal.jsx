import React from 'react';

const Modal = ({text} ) => {

  let clear = ()=>{
    window.location.reload();
  }

  return (
    <>
      <div className="modal" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Message</h5>
              <button onClick={clear} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{text}</p>
            </div>
            <div className="modal-footer">
              <button onClick={clear} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;