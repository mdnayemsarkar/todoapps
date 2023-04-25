import React, { useState } from "react";
import "./LoginPg.css";
import img from "./Images/20191029_171125-01.jpeg"


function LoginPg (){
    const [name,setName] =useState("");
const [fullname,setFullName]=useState('');


const inputEvent = (event) =>{
    setName(event.target.value);
};

 const onSubmit = () =>{
    setFullName('');
 };
return(
 <>
    <body>
        <div className="container">
            <div className="logbox">
                <h2>Let's Manage {fullname}</h2>
                <p>Start Your 30 days free trial</p>
                <span className="txtbx"><b>Name:</b></span>
                <input type="text" placeholder="Enter Your Name"onChange={inputEvent} required>
                </input>
                <span className="txtbx"><b>Email:</b></span>
           <input type="text" placeholder="Enter your Email" name="" id="" onChange={inputEvent}  required/>
           <span className="txtbx"><b>Password:</b></span>
           <input type="password" placeholder="Create a password" onChange={inputEvent} required/>
           <button className="btn1" onClick={onSubmit}>Log In</button>
            <button className="btn2">  Sign up with google</button>
            <p>Already have an account?<a href=""><b>Log in</b></a></p>
            </div>
            <div className="imgbox"><img src={img} alt=""/>  <div className="sbmtdtls">{name}</div></div>
           
        </div>
    </body>
 </>
)
};
export default LoginPg;