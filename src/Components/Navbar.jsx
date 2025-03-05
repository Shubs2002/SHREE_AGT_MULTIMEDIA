import React, { useState } from 'react';
import '../Styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Brand<span>Logo</span></h1>
      
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#features">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
