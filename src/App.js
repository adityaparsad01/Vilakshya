import React from 'react';
import './style.css';

import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import HomeSlider from './components/Sliders/homeSlider'

const App = () => {
  return (
    <>
    <Navbar/>
    <HomeSlider/>
    <Products />
    </>
  );
};

export default App;
