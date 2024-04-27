import './App.css';
import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";
import Home from './components/contents/Home';
import Calendar from "./components/contents/Calendar";
import Checklist from "./components/contents/Checklist";
import Signin from "./components/contents/Signin";
import BeePath from './bGDecorations/BeePath';


// Routes
import  { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <NavBar />
        <BeePath />
        <section className="orientation h-full flex">
        <SideNav />
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
