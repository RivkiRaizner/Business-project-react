// import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import About_us from './components/About_us';
import Schedule_meeting from './components/Schedule_meeting';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
     {/* <Upload/> */}
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/about_us" element={<About_us/>}/>
       <Route exact path="/schedule_meeting" element={<Schedule_meeting/>}/>
       <Route exact path="/login_manager" element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
