import React from 'react';
import  { Link, NavLink } from 'react-router-dom';
import bee from "./bee.png";

function NavBar() {
  return (
    <div className='navigation-bar'>
        <Link to="/" className='page-title'>
          <img className='bee-logo' src={bee} alt='logo' />
          <span className='only-title'>Schedule Bees</span>
        </Link>
        <div className='nav-buttons-align'>
          <button className='nav-btn'>Button</button>
          <button className='nav-btn'>Button</button>
          <button className='nav-btn'>Button</button>
        </div>
        <NavLink to="Signin">Sign In</NavLink>
    </div>
  );
}

export default NavBar;