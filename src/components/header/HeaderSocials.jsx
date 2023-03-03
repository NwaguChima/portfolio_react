import React from 'react';
import { IoLogoLinkedin, IoLogoGithub, IoLogoMedium } from 'react-icons/io5';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/chima-nwagu-3972a6179/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoLinkedin />
      </a>
      <a
        href="https://github.com/NwaguChima"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub />
      </a>
      <a
        href="https://medium.com/@nwaguchima48"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoMedium />
      </a>
    </div>
  );
};

export default HeaderSocials;
