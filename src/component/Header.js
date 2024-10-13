import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/bhav-logo.png" alt="Bhavesh Chainani" />
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#proficiencies">Proficiencies</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
