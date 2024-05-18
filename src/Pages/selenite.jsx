import React from 'react';
import sell1 from '../images/sell1.png';
import sell2 from '../images/sel3.PNG';
import sell6 from '../images/sel4.PNG';
import sell3 from '../images/sell3.png';
import sell4 from '../images/sell4.png';
import sell5 from '../images/sell5.png';
import Nav from '../layouts/nav';
import Footer from '../layouts/footer';

function Selenite() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="container mt-5">
      <div className="container mt-5">
  <div className="row">
    <div className="col-md-4">
      <img src={sell1} className="img-fluid shadow border" alt="Pierre 1" />
    </div>
    <div className="col-md-4">
      <img src={sell3} className="img-fluid shadow border" alt="Pierre 3" />
    </div>
    <div className="col-md-4">
      <img src={sell4} className="img-fluid shadow border" alt="Pierre 4" />
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <img src={sell5} className="img-fluid shadow border" alt="Pierre 5"/>
    </div>
    <div className="col-md-4">
      <img src={sell2} className="img-fluid shadow border" alt="Pierre 2" />
    </div>
    <div className="col-md-4">
      <img src={sell6} className="img-fluid shadow border" alt="Pierre 6" />
    </div>
  </div>
</div>
</div>
<br />
<div>
  <Footer />
</div>

    </>
  );
}

export default Selenite;
