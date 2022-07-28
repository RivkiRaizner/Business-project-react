// import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import About_us from './components/About_us';
import Schedule_meeting from './components/Schedule_meeting';
import Put_user_details from './components/Put_user_details';

function App() {
  return (
    <div className="App">
     {/* <Upload/> */}
     {/* <Put_user_details/> */}
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/about_us" element={<About_us/>}/>
       <Route exact path="/schedule_meeting" element={<Schedule_meeting/>}/>
       <Route exact path="/put_user_details" element={<Put_user_details id="3f979457-2d01-4d11-a8a3-84fe7d2cfb41"/>}/>

     </Routes>
    </div>
  );
}

export default App;
