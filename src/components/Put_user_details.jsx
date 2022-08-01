// import { Link } from "react-router-dom";
import React from "react";
import {axios} from 'axios';
import Button from '@material-ui/core/Button'


const Put_user_details =async (props) =>{
    const id=props.oo;
    let businessDetails;
    try{ 
            // eslint-disable-next-line no-unused-vars
            businessDetails = await axios.get(`https://meetings-test.herokuapp.com/business/${id}`);
    }catch (err) {

    }
    // .then(res =>businessDetails=res.json());
    return(
        <>
    <p>
        <input type="number">enter id of user to edit his details</input>
        <Button id="add_service" onClick={addService()}>ADD NEW SERVICE</Button>

    </p>
        </>
    )
}
const addService=()=>{
    <div>
        <input type="text" id="serviceName" name="serviceName" placeholder="Enter service name" />
        <input type="number" id="numOfMeetings" name="numOfMeetings" placeholder="num of meetings"/>
        <input type="number" id="durationOfMeeting" name="durationOfMeeting" placeholder="duration of meeting" />
        <input type="number" id="cost" name="cost" placeholder="Cost" />
        <input type="text" id="meetingPlace" name="meetingPlace" placeholder="meeting place" /> 
        <input type="number" id="meetingTiming" name="meetingTiming" placeholder="meeting timing" />
        <Button onclick={saveServiceInBusiness()}>ADD AND SAVE</Button> 
    </div>
}
const saveServiceInBusiness = () => {
alert('Service In Business saved successfully')

}
export default Put_user_details;