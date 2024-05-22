import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import PPierre from './Pages/PagePierre';
import Selenite from './Pages/selenite';

function App() {
  return (
    <Router basename="/HorizonMinerals">
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/minerals" element={<PPierre />} />
        <Route path="/selenite" element={<Selenite />} />
      </Routes>
    </Router>
  );
}

export default App;
