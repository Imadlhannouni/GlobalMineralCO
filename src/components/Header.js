import React from 'react';
import './App.css';
import Nav from '../layouts/nav';

const Header = () => {
  return (
    <header id="main" className="bg-primary text-white">
      <Nav />
      <div className="name text-center">
        <h1>Bienvenue chez <span> <br></br>Horizon Minerals</span></h1>
        <div className="header-btns">
          <a href="#pierres" className="btn btn-primary m-2">Nos pierres</a>
          <a href="#contact" className="btn btn-secondary m-2">Nous contacter</a>
        </div>
      </div>
      <div className="arrow"></div>
    </header>
  );
};

export default Header;
