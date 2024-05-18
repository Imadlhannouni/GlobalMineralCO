import React from 'react';
import min1 from '../images/min1.PNG';
import min2 from '../images/min2.PNG';
import min3 from '../images/min3.PNG';
import Nav from '../layouts/nav';

function PPierre() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="container mt-5">
  <div className="row">
    <div className="col-md-12">
      <img src={min1} className="img-fluid mb-3" alt="Pierre 1" />
    </div>
    <div className="col-md-12">
      <img src={min2} className="img-fluid mb-3" alt="Pierre 2" />
    </div>
    <div className="col-md-12">
      <img src={min3} className="img-fluid mb-3" alt="Pierre 3" />
    </div>
  </div>
</div>


    </>
  );
}

export default PPierre;
