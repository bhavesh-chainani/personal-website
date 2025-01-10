import React from 'react';

const Header = () => {
  return (
    <header>
      <nav id="nav">
        <div className="header">
          <div className="logo">
            <img src="./assets/bhav-logo.png" alt="Bhavesh Chainani" />
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#proficiencies">Proficiencies</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#other-platforms">Other Platforms</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
