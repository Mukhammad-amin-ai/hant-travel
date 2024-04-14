import React from 'react';
import Image from 'next/image';


function Loading() {
  return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{display: 'flex', alignItems: "center", justifyContent: 'center'}}>
        <iframe src="https://lottie.host/embed/616e2865-a1c3-4ab7-a753-1d79b01f8ca4/B7ZExSP7i0.json"></iframe>
      </div>
    </div>
  );
}

export default Loading;