import React from 'react';

function Checklist() {
  return (
    <header className='contents'>
        <div className='page flex flex-col justify-around'>
          <div className='flex flex-col justify-around gap-6'>
            <h3 className='text-xl mb-6'>Checklist</h3>
            <div className='flex gap-2'>
              <input className='border-2 rounded-xl pl-2 p-1 w-1/2' type='text' placeholder='Add a Task'></input>
              <input className='border-2 rounded-xl pl-2 p-1 w-max' type='date' placeholder='Add a Task'></input>
              <input className='border-2 rounded-xl pl-2 p-1 w-max' type='time' placeholder='Add a Task'></input>
            </div>
            <button className='border-2 w-max p-1 rounded-lg'>Create Task</button>
          </div>
          <div className=''>
            <h1 className='text-xl'>Your Tasks</h1>
            <ul className='text-black'>
              <li>
                Eat Putting
              </li>
              <li>
                Eat Pocket Ham
              </li>
            </ul>
          </div>
          <div className=''>
            <h1 className='text-xl'>Today's Tasks</h1>
            <ul className='text-black'>
              <li>
                Eat Putting
              </li>
              <li>
                Eat Pocket Ham
              </li>
            </ul>
          </div>
        <ul>

        </ul>
        </div>

    </header>
  );
}

export default Checklist;