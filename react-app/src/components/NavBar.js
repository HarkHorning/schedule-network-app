import React from 'react';
import  { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navigation-bar'>
        <Link to="/" className='page-title'>Schedule Network</Link>
        <div className='flex gap-20'>
          <button className='nav-btn'>Button</button>
          <button className='nav-btn'>Button</button>
          <button className='nav-btn'>Button</button>
        </div>
        <NavLink to="Signin">Sign In</NavLink>
    </div>
  );
}

export default NavBar;