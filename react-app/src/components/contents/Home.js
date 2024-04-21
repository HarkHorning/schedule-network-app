import React, { useState } from 'react';
import logo from "./logoCal.png";
import Footer from '../Footer';

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
              <h1 className='page-header'>Fitting Schedules Together</h1>
            </header>
            <div className='page flex'>
              <div className='w-2/3 flex flex-col'>
                <h2 className='flex mt-6 text-5xl text-yellow-500 font-light'>This is the home page:</h2>
                <p className='text-2xl text-black mt-16 leading-8 pr-2'>
                  A way to never miscomunicate schedules again. Seemlessly integrate the schedules of other users with your own.
                </p>
                
              </div>
              <img className='home-logo' src={logo} alt='logo' />
            </div>
            <h3 className='mt-20 text-3xl text-slate-700 font-light'>How do we do it?</h3>
            <p className='text-lg text-slate-600 mt-8 leading-8 w-4/5 font-semibold'>
              A way to never miscomunicate schedules again. Seemlessly integrate the schedules of other users with your own.
            </p>
          <div className='mt-4 pt-12 w-full flex justify-between relative mb-8'>
            <div className='outline-bg'></div>
            <div className='vert-card'>
              <h1 className='text-xl'>What's a Colony?</h1>
              <ul className='pt-4'>
                <li className='mb-2'>Each Colony is a network of combined schedules</li>
                <li className='mb-2'>Each Colony is a network of combined schedules</li>
                <li className='mb-2'>Each Colony is a network of combined schedules</li>
              </ul>
            </div>
            <div className='vert-card'>
              <h1 className='text-xl'>What's a Colony?</h1>
              <ul className='pt-4'>
                <li className='mb-2'>Each Colony is a network of combined schedules</li>
                <li className='mb-2'>Each Colony is a network of combined schedules</li>
                <li className='mb-2'>Each Colony is a network of combined schedules</li>
              </ul>
            </div>

          </div>
          <div className='compatibility bg-slate-600'>
            <h1>compatibility</h1>
          </div>
          <Footer />
        </div>
    </header>
  );
}

export default Home;