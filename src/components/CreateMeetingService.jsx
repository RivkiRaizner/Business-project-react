
import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";



const CreateMeetingService=()=>
{
    const location = useLocation();
    const form = location.state;
    const id = form.businessId;   
    
    
const getBusiness=async()=>{
    const bd=  await axios.get('https://meetings-test.herokuapp.com/service/'+id);
    console.log(bd);
}
getBusiness();
return
(
    <>
        <p>
            pop
        </p>
        </>
    )
}



export default CreateMeetingService