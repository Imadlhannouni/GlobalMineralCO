import React from 'react';
import './Pierres.css';
import minerals from '../images/mineral.PNG';
import selenite from '../images/selenite.PNG';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Pierres = () => {
  return (
    <section id="pierres" className="container mt-5">
      <h2 className="text-center mb-4">Nos Pierres</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={minerals} className="card-img-top" alt="Pierre 1" />
            <div className="card-body d-flex justify-content-center align-items-center">
              <Link to="/minerals" className="btn btn-primary m-2">Voir plus</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={selenite} className="card-img-top" alt="Pierre 2" />
            <div className="card-body d-flex justify-content-center align-items-center">
              <Link to="/selenite" className="btn btn-primary m-2">Voir plus</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div style={{ width: '130%', height: '500px', position: 'relative' }}>
            <ReactPlayer
              url={require('../videos/background2.mp4')}
              playing={true}
              loop={true}
              muted={true}
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div style={{ width: '70%', height: '500px', position: 'relative' }}>
            <ReactPlayer
              url={require('../videos/background.mp4')}
              playing={true}
              loop={true}
              muted={true}
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pierres;

