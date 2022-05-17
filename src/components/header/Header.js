import React from 'react';
import logo from '../../image/logo.jpeg';

const Header = () => (
  <header className="flex flex-col bg-header-background bg-cover h-52">
    <div className="flex justify-center items-center gap-2 h-full backdrop-blur-sm">
      <img src={logo} alt="Logo" className="rounded-full w-16 h-16" />
      <h2 className="text-green-500 font-bold text-3xl">
        Soccer
        {' '}
        <br />
        {' '}
        Magazine
      </h2>
    </div>
  </header>
);

export default Header;
