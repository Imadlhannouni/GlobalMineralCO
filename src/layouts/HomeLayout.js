import React from 'react';
import Header from '../components/Header';
import Pierres from '../components/Pierres';
import Contact from '../components/Contact';
import Footer from './footer';

const HomeLayout = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Pierres />
      </main>
      <Contact />
      <Footer />
    </div>
  );
};

export default HomeLayout;
