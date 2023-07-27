import React, { useState } from 'react';
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
          <a href="#">Home</a>
         
         
          <span className='border'><a href="#"> <div className='text-border'>A</div> </a> </span>
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
