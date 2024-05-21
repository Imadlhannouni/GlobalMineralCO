import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#main">
          <Link to="/" className="nav-link"><img src={logo} alt="Logos" width="100" /></Link>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
              <Link to="/minerals" className="nav-link">Minerals</Link>
              </li>
              <li className="nav-item">
              <Link to="/selenite" className="nav-link">Selenite</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      );
}

export default Nav;