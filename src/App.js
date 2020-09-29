import React from 'react';
import logo from './assets/logo192.png';
import './style/App.scss';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Products from './pages/Products';

function App() {
  return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bike Store <span>Berlin</span></h1>
      </header>
      <Navbar />
      <Home /> 
      <Products />
      <Contact />
      {/*  */}
    </div>  
  );
}

export default App;
