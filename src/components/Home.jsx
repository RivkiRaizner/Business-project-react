import '../index.css';
// import About_us from "./About_us";
// import Schedule_meeting from "./Schedule_meeting";
import {Link} from "react-router-dom";
const Home = () => {

    return (
        <div id="menu">
            {/* <About_us/> */}
            <Link to="/about_us">About us</Link>
            <Link to="/schedule_meeting">schedule a meeting</Link>
            <Link to="/login_manager">login manager</Link>

            
        </div>
    )
}
export default Home;