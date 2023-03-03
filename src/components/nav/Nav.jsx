import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { FaUserAlt, FaBook } from 'react-icons/fa';
import { MdOutlineMiscellaneousServices, MdContactPage } from 'react-icons/md';

import './nav.css';

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <IoHomeOutline />
      </a>
      <a href="#about">
        <FaUserAlt />
      </a>
      <a href="#experience">
        <FaBook />
      </a>
      <a href="#services">
        <MdOutlineMiscellaneousServices />
      </a>
      <a href="#contact">
        <MdContactPage />
      </a>
    </nav>
  );
};

export default Nav;
