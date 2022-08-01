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
            <button onClick={ () => navigate('/createMeetingService', { state: { businessId: '4bed7e06-00a0-4a5c-8185-794e1f909be0' } }) }>create meeting </button>
            </div>
            <div id="OrderingGifts">
            <p>
                 Mortgage advice
            </p>
            <button onClick={() => navigate('/createMeetingService',{ state: { businessId: '7ea10246-38d0-4685-a3e6-3daaf363c6fa' }})}>create meeting </button>
            </div>
            <div id="MortgageAdvice">
            <p>
                 Ordering gifts
            </p>
            <button onClick={() => navigate('/createMeetingService',{ state: { businessId: '2624cf9b-9a4d-47d7-80ca-4f59b8ab7ce3' }})}>create meeting </button>
            </div>
            
          
          
            
        </div>
    )
}
export default Home;