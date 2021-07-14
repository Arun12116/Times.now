import React from "react";
import { useState } from 'react';
import Confirm from "./Confirm"
const Form=()=>{

    const [state,setState] =useState(false);

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [rePassword,setRePassword] = useState("");

   
  

    function ShowConfirmDialog(){
      return(
        <>
        <Confirm click={state=>setState(state)} firstName={firstName} lastName={lastName} email={email} pass={password} rePass={rePassword}/>
        </>
      )
    }

    // function TimeOut(){
    //     setTimeout(()=>{
    //         setFirstName("")
    //         setLastName("")
    //         setEmail("")
    //         setPassword("")
    //         setRePassword("")
    //     },500)
    // }

    return(
        <>
            <div className="form">

        <div className="options">
        <h2 className="contact">CONTACT-US </h2>

            <input onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="First-Name"  id="first"/>
            <br />
            <input onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="Last-Name" id="second" />
            <br />
            <input onChange={(e)=>setEmail(e.target.value)} type="email" name="Email" placeholder="Email"  id="email" />
            <br />
            <input onChange={(e)=>setPassword(e.target.value)} type="password" name="Password"  placeholder="password" id="pass1" />
            <br />
            <input onChange={(e)=>setRePassword(e.target.value)} type="password" name="ConForm-Password" placeholder="Conform -Password" id="pass2" />
            
        <button onClick={()=>{setState(true)}  }className="btn1">Submit</button>


        </div>
        {
         state?ShowConfirmDialog():""
        }
        
        </div>
        </>
        
    )
}

export default Form;