// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About_us from './components/About_us';
import Schedule_meeting from './components/Schedule_meeting';
import Put_user_details from './components/Put_user_details';
import Login from './components/Login';
import CreateMeetingService from './components/CreateMeetingService';

function App() {
  return (
    <div className="App">
     {/* <Upload/> */}
     {/* <Put_user_details/> */}
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/about_us" element={<About_us/>}/>
       <Route exact path="/Put_user_details" element={<Put_user_details/>}/>
       <Route exact path="/schedule_meeting" element={<Schedule_meeting/>}/>
       <Route exact path="/login_manager" element={<Login/>}/>
       <Route exact path="/createMeetingService" element={<CreateMeetingService/>}/>
     </Routes>
     {/* <Put_user_details/> */}
    </div>
  );
}

export default App;
