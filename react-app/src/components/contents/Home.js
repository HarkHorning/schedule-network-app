import React, { useState } from 'react';
import logo from "./logoCal.png";
import Footer from '../Footer';
import HowDo from './contents_sections/how_do_we';

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
                <h2 className='this-page flex mt-6 text-5xl font-semibold'>This is the home page:</h2>
                <p className='page-one-contents text-black mt-12 leading-8 pr-2'>
                  A way to never miscomunicate schedules again. Seemlessly integrate the schedules of other users with your own.
                </p>
                
              </div>
              <img className='home-logo' src={logo} alt='logo' />
            </div>
          <HowDo />
          <Footer />
          </div>
    </header>
  );
}

export default Home;
