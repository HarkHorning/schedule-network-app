import './App.css';
import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";
import Home from './components/contents/Home';
import Calendar from "./components/contents/Calendar";
import Checklist from "./components/contents/Checklist"


// Routes
import  { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar />
      <section className="h-full flex">
      
      <BrowserRouter className="h-full flex">
      <SideNav />
        <div className='contents'>
          <Routes>
            <Route index element={<Home />} />
            <Route path="Calendar" element={<Calendar />} />
            <Route path="Checklist" element={<Checklist />} />
          </Routes>
        </div>
      </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
