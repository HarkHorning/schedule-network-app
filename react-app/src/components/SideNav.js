import React from 'react';
import  { NavLink } from 'react-router-dom';


function SideNav() {
  return (
    <div className='side-bar'>
        <div className='side-bar-align'>
            <NavLink className='side-bar-btn' to="/">Home Page</NavLink>
            <NavLink className='side-bar-btn' to="Calendar">Calendar</NavLink>
            <NavLink className='side-bar-btn' to="Checklist">Checklist</NavLink>
        </div>
    </div>
  );
}

export default SideNav;
