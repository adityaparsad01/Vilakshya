import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products'


const App = () => {
  return (
    <>
    <Navbar/>
    <Products/>
    </>
  );
};

export default App;
