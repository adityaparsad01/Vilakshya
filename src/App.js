import React from 'react';
import './style.css';

import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
    <Navbar/>
      <Products />
    </>
  );
};

export default App;
