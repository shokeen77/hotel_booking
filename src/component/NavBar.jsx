import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">BookStay</div>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Button>Home</Button>
         
         
          <span className='border'><button> <div className='text-border'>A</div> </button> </span>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'change' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'change' : ''}`} />
        </div>
      </nav>
     
    </div>
  );
};

export default NavBar;
