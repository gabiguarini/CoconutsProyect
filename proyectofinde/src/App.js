import React from 'react';
import './Style.css';
//import './App.css';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Company from './components/Company';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <Company /> 
        <div class="container-fluid">
          <AboutUs />          
        </div>
        <div class="container-fluid">
          <Services />          
        </div>
        <div class="container-fluid">
          <Reviews />          
        </div>
        <div class="container-fluid">
          <Contact />          
        </div>   
      </header>
    </div>
  );
}
export default App;
