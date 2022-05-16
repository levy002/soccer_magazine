import React from 'react';
import { Link } from 'react-router-dom';
import { GoChevronLeft } from 'react-icons/go';
import { MdSettings } from 'react-icons/md';

const Navbar = () => (
  <nav>
    <Link to="/">
      <GoChevronLeft />
      <h3>Home</h3>
    </Link>
    <MdSettings />
  </nav>
);

export default Navbar;
