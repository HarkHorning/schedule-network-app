import React from 'react';

function More() {
  return (
    <div className='how-do-we w-full flex flex-col items-center gap-6'>
        <h3 className='mt-20 text-3xl text-slate-700 font-light'>How do we do it?</h3>
        <p className='text-lg text-slate-600 mt-8 leading-8 w-4/5 font-semibold'>
          A way to never miscomunicate schedules again. Seemlessly integrate the schedules of other users with your own.
        </p>
      <div className='mt-4 pt-12 w-full flex justify-between relative mb-8 change-orientation'>
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
    </div>
  );
}

export default More;
