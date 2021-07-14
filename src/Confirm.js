import React, { useState } from "react";
import "./Confirm.css"
export default function Confirm(props){


    const [cnf,setCnf] =useState();
    return(
        <>

        <div className="confirm-page">
        
            <h3>First-Name : {props.firstName} </h3>
            <h3>Last-Name: {props.lastName}</h3>
            <h3>Email : {props.email}</h3>
            <h3>Password : {props.pass}</h3>
            <h3>Conform -Password : {props.rePass}</h3>
            <button onClick={()=>props.click(setCnf(false))}>Confirm</button>
        </div>

      
        
        </>
    )
}