import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me.jpg';
import './header.css';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Chima Nwagu</h1>

        <CTA />
      </div>
    </header>
  );
};

export default Header;
