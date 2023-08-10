import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  BrowserRouter,
  Route,
  
  Routes,
} from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


    function Form(){
       <label>Form</label>
    }

     return (
      <>
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">BookStay</div>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <BrowserRouter>  
          <Button href='/' className='nav-home'>Home</Button>
        </BrowserRouter>
       
       <label className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div className="dd-button" onClick={() => setIsOpen(!isOpen)}>
       <div className='drop-title'> A </div>
      </div>
      <input type="checkbox" className="dd-input" id="test" />
      {isOpen && (
      
       
        <ul className="dd-menu">
            <BrowserRouter>  
          <li>
            < a href="/form">SignIn/SignUp Form</a>
          </li>
          <li>
            <a href="/bookinghistory">Booking History</a>
            </li>
           </BrowserRouter>
          <li className="divider"></li>
       
        </ul>
        
     
      )}
    </label>
       
     
     
      
       
        
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'change' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'change' : ''}`} />
        </div>
      </nav>
     
    </div>
    </>
  );
};

export default NavBar;
