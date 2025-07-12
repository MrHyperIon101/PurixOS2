import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          PurixOS
        </Link>
        
        <div className={isOpen ? "nav-menu active" : "nav-menu"}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          {isHomePage && (
            <>
              <span className="nav-link" onClick={() => {
                setIsOpen(false);
                scrollToSection('features');
              }}>
                Features
              </span>
              <span className="nav-link" onClick={() => {
                setIsOpen(false);
                scrollToSection('showcase');
              }}>
                Showcase
              </span>
              <span className="nav-link" onClick={() => {
                setIsOpen(false);
                scrollToSection('community');
              }}>
                Community
              </span>
            </>
          )}
          <Link to="/downloads" className="nav-link" onClick={() => setIsOpen(false)}>
            Downloads
          </Link>
          <Link to="/workspaces" className="nav-link" onClick={() => setIsOpen(false)}>
            Workspaces
          </Link>
          <Link to="/security" className="nav-link" onClick={() => setIsOpen(false)}>
            Security
          </Link>
          <Link to="/devtools" className="nav-link" onClick={() => setIsOpen(false)}>
            Dev Tools
          </Link>
          <Link to="/support" className="nav-link" onClick={() => setIsOpen(false)}>
            Support
          </Link>
        </div>
        
        <div className={isOpen ? "nav-toggle active" : "nav-toggle"} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;