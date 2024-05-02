import './App.css';
import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";
import Home from './components/contents/Home';
import Calendar from "./components/contents/Calendar";
import Checklist from "./components/contents/Checklist";
import Signin from "./components/contents/Signin";
import BeePath from './bGDecorations/BeePath';
import HoneycombBG from './bGDecorations/honeycombBG';


// Routes
import React, { useState, useEffect } from 'react';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)

      }
    )
  }, [])

  return (
    <BrowserRouter >
      <div className="App">
        <NavBar />
        <BeePath />
        <HoneycombBG />
        <section className="orientation h-full flex">
        <SideNav />
        {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )}
        <div className='contents'>
          <Routes>
            <Route index element={<Home />} />
            <Route path="Calendar" element={<Calendar />} />
            <Route path="Checklist" element={<Checklist />} />
            <Route path="Signin" element={<Signin />} />
          </Routes>
        </div>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
