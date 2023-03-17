import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram, FiTwitter } from 'react-icons/fi';

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        CHIMA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/chima-nwagu-3972a6179/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/MichaelNwagu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter />
        </a>
        <a
          href="https://web.facebook.com/chumzy99/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; {new Date().getFullYear()} Chima Nwagu. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
