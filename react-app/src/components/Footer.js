import React from 'react';
import  { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <footer className='footer'>
        <div className='w-2/3 h-min p-1 bg-slate-600 rounded-md text-center text-white'> Options</div>
        <div className='flex flex-col justify-around items-center gap-8'>
            <NavLink className='footer-link' to="/">Home Page</NavLink>
            <NavLink className='footer-link' to="Calendar">Calendar</NavLink>
            <NavLink className='footer-link' to="Checklist">Checklist</NavLink>
        </div>
        <div className='flex flex-col justify-around items-center gap-8'>
            <NavLink className='footer-link' to="/">Home Page</NavLink>
            <NavLink className='footer-link' to="Calendar">Calendar</NavLink>
            <NavLink className='footer-link' to="Checklist">Checklist</NavLink>
        </div>
        <div className='flex flex-col justify-around items-center gap-8'>
            <NavLink className='footer-link' to="/">Home Page</NavLink>
            <NavLink className='footer-link' to="Calendar">Calendar</NavLink>
            <NavLink className='footer-link' to="Checklist">Checklist</NavLink>
        </div>
    </footer>
  );
}

export default Footer;
