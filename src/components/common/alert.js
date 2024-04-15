import React from 'react';

function Alert() {
  return (
    <div className="w-fluid h-auto ">
      <div className="position-fixed" style={{zIndex: 999, top: "80px", right: "50px",}}>
        <div className="alert alert-danger" role="alert">
          Fill All Section To Search Properly
        </div>
      </div>
    </div>
  );
}

export default Alert;

