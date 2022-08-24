import React from 'react';
import { About, Footer, Skills, Header, Testomonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testomonial />
      <Footer />
    </div>
  );
};

export default App;
