import React from "react";
import { useState } from "react";
import axios from 'axios';
import Button from '@material-ui/core/Button'
import Put_user_details from './Put_user_details'


const Login=()=>
{
const [name,setName]=useState(" ");
const [password,setPassword]=useState(" ");
const id="3f979457-2d01-4d11-a8a3-84fe7d2cfb41";

 
 const sumbitLogin= async() => {
    try{ let dataManeger=await axios.get(`https://meetings-test.herokuapp.com/user/${id}`);
        if(dataManeger.data.password===password && dataManeger.data.username===name)
            <Put_user_details id={id}/>
         }
    catch (err){
        console.error(err); 
    }
   

  }


    return(
        <>
            <input type="text" placeholder="userName"  onChange={(e) => setName(e.target.value)}></input>
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
            <Button  onClick={() => {sumbitLogin();}} >Login</Button>
        </>
    )
}
export default Login;