import React from 'react';

function NavBar() {
  return (
    <div className='navigation-bar'>
        <h1 className='page-title'>Schedule Network</h1>
        <div className='flex gap-20'>
          <button className='nav-btn'>Button</button>
          <button className='nav-btn'>Button</button>
          <button className='nav-btn'>Button</button>
        </div>
        <button>Sign In</button>
    </div>
  );
}

export default NavBar;