import React, { useState } from 'react';
import logo from "./logoCal.png";

function Home() {

  const [scroll, scrollAnimation] = useState(false);

  const scrollBackground = () => {
    if (window.scrollY >= 1) {
        scrollAnimation(true);
    } else {
        scrollAnimation(false);
    }
  }
  

  window.addEventListener('scroll', scrollBackground);

  return (
    <header className='contents'>
        <div className='home'>
            <header className={ scroll ? "header active" : "header"}>
              <h1 className='page-header'>Combine Schedules</h1>
            </header>
            <div className='page flex'>
              <div className='w-2/3 flex flex-col'>
                <h2 className='flex mt-6 text-5xl text-slate-500 font-light'>This is the home page:</h2>
                <p className='text-2xl text-black mt-16 leading-8'>
                  A way to never miscomunicate schedules again. Seemlessly integrate the schedules of other users with your own.
                </p>
                
              </div>
              <img className='w-1/3' src={logo} alt='logo' />
            </div>
            <h3 className='mt-20 text-3xl text-slate-700 font-light'>How do we do it?</h3>
            <p className='text-lg text-slate-600 mt-8 leading-8 w-4/5 font-semibold'>
              A way to never miscomunicate schedules again. Seemlessly integrate the schedules of other users with your own.
            </p>
        </div>
    </header>
  );
}

export default Home;