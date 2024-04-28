import React from 'react';

function Calendar() {
  return (
    <header className='contents '>
        <div className='page bg-gradient-to-br from-yellow-300 to-yellow-600 overflow-hidden'>
            <div className='honeycomb'>
            </div>
            <div className='honeycomb two'>
            </div>
            <div className='honeycomb three'>
            </div>
            <h2 className='text-xl border-b-2 pb-8'>Calendar</h2>
            <ul className='calendar-grid'>
              <li className='calendar-day border-2 past-future'>31</li>
              <li className='calendar-day border-2'>1</li>
              <li className='calendar-day border-2'>2</li>
              <li className='calendar-day border-2'>3</li>
              <li className='calendar-day border-2'>4</li>
              <li className='calendar-day border-2'>5</li>
              <li className='calendar-day border-2'>6</li>
              <li className='calendar-day border-2'>7</li>
              <li className='calendar-day border-2'>8</li>
              <li className='calendar-day border-2'>9</li>
              <li className='calendar-day border-2'>10</li>
              <li className='calendar-day border-2'>11</li>
              <li className='calendar-day border-2'>12</li>
              <li className='calendar-day border-2'>13</li>
              <li className='calendar-day border-2'>14</li>
              <li className='calendar-day border-2'>15</li>
              <li className='calendar-day border-2'>16</li>
              <li className='calendar-day border-2'>17</li>
              <li className='calendar-day border-2'>18</li>
              <li className='calendar-day border-2'>19</li>
              <li className='calendar-day border-2'>20</li>
              <li className='calendar-day border-2'>21</li>
              <li className='calendar-day border-2'>22</li>
              <li className='calendar-day border-2'>23</li>
              <li className='calendar-day border-2'>24</li>
              <li className='calendar-day border-2'>25</li>
              <li className='calendar-day border-2'>26</li>
              <li className='calendar-day border-2'>27</li>
              <li className='calendar-day border-2'>28</li>
              <li className='calendar-day border-2'>29</li>
              <li className='calendar-day border-2'>30</li>
              <li className='calendar-day border-2 past-future'>1</li>
              <li className='calendar-day border-2 past-future'>2</li>
              <li className='calendar-day border-2 past-future'>3</li>
              <li className='calendar-day border-2 past-future'>4</li>
              <li className='calendar-day border-2 past-future'>5</li>
              <li className='calendar-day border-2 past-future'>6</li>
              <li className='calendar-day border-2 past-future'>7</li>
              <li className='calendar-day border-2 past-future'>8</li>
              <li className='calendar-day border-2 past-future'>9</li>
              <li className='calendar-day border-2 past-future'>10</li>
              <li className='calendar-day border-2 past-future'>11</li>

 
          </ul>
          <div className='flex flex-col justify-around gap-6'>
            <h3 className='text-xl mb-6'>People</h3>
            <div className='flex gap-2'>
              <input className='border-2 rounded-xl pl-2 p-1 w-1/2' type='text' placeholder='Add a Task'></input>
              <input className='border-2 rounded-xl pl-2 p-1 w-max' type='date' placeholder='Add a Task'></input>
              <input className='border-2 rounded-xl pl-2 p-1 w-max' type='time' placeholder='Add a Task'></input>
            </div>
            <button className='border-2 w-max p-1 rounded-lg'>Create Task</button>
          </div>

        </div>
    </header>
  );
}

export default Calendar;