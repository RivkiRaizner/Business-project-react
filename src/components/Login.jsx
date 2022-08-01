import React from "react";
import { useState } from "react";
import axios from 'axios';
import Button from '@material-ui/core/Button'
// import Put_user_details from './Put_user_details'


const Login=()=>
{
const [name,setName]=useState(" ");
const [password,setPassword]=useState(" ");
// const id="473d5602-67d0-49ab-ad9f-a03d02f549ab";

 
 const handleSubmit= async() => {
   
    const userData={ 
        "username": name,
        "password": password
    };
  
    const result = userLogin(userData);
    alert(result);
    if(result)
        window.open('./Put_user_details')
     
    };
 
      const userLogin=async(userData)=>{
        try{
            return await axios.post("https://meetings-test.herokuapp.com/user/signin ", userData)
        }
         catch{
            console.log('error to signin')
         }
    }

    return(
        <>
            <input type="text" placeholder="userName"  onChange={(e) => setName(e.target.value)}></input><br/> <br/><br/>
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input><br/> <br/><br/>
            <Button  onClick={() => {handleSubmit()}} >Login</Button>
        </>
    )
}
export default Login;