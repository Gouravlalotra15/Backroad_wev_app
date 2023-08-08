import React from 'react'
import "./App.css"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Tours from './components/Tours';
import About from './components/About';
const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Tours/>
    </>
  );
}

export default App