import '../index.css';
// import About_us from "./About_us";
// import Schedule_meeting from "./Schedule_meeting";
import CreateMeetingService from "./CreateMeetingService";
// import Button from '@material-ui/core/Button'
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    
    return (
        <div id="menu">
            {/* <About_us/> */}
            <Link to="/about_us">About us</Link>
            <Link to="/schedule_meeting">schedule a meeting</Link>
            <Link to="/login_manager">login manager</Link>
            <div id=" weddingDress">
            <p>
                wedding dress
            </p>
            <button onClick={ () => navigate('/createMeetingService', { state: { business: " wedding dress" } }) }>create meeting </button>
            </div>
            <div id="OrderingGifts">
            <p>
                 Ordering gifts
            </p>
            <button onClick={() => navigate('/createMeetingService',)}>create meeting </button>
            </div>
            <div id="MortgageAdvice">
            <p>
                Mortgage advice
            </p>
            <button onClick={() => navigate('/createMeetingService')}>create meeting </button>
            </div>
            
          
          
            
        </div>
    )
}
export default Home;