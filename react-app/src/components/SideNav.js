import React from 'react';
import  { NavLink } from 'react-router-dom';


function SideNav() {
  return (
    <div className='side-bar'>
        <div className='flex flex-col justify-around items-center gap-8'>
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="Calendar">Calendar</NavLink>
            <NavLink to="Checklist">Checklist</NavLink>
        </div>
    </div>
  );
}

export default SideNav;
