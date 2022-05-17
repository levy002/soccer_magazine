import React from 'react';
import { Link } from 'react-router-dom';
import { MdSettings } from 'react-icons/md';

const Navbar = () => (
  <nav className="flex justify-between items-center p-3 w-full backdrop-blur bg-gray-50">
    <Link to="/" className="flex justify-center items-center text-green-600 font-bold text-xl">
      <h3>Home</h3>
    </Link>
    <MdSettings size={20} color="green" />
  </nav>
);

export default Navbar;
