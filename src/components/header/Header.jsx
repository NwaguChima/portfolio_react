import React from 'react';
import CTA from './CTA';
import './header.css';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Chima Nwagu</h1>

        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
          {/* bottom of page */}
        </a>
      </div>
    </header>
  );
};

export default Header;
