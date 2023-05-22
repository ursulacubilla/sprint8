import React from "react";


export const Login = () => {
  
    return(
        <>
        <input className="input-login" placeholder="User"></input>
        <input type="password" className="input-login" placeholder="Password"></input>

        <button className="button-login">Submit</button>
        </>
    );
}