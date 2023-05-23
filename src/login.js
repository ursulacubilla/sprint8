import React from "react";
import { useEffect } from "react";


export const Login = ({user, password }) => {
    
    useEffect(() => {
  const localUser = localStorage.getItem('user', user);
  const localPasword = localStorage.getItem('password', password);
  console.log(localUser, localPasword);
//   setUser(localUser);
//   setPassword(localPasword)
}, []);
  
    return(
        <>
        <input className="input-login" placeholder="User"></input>
        <input type="password" className="input-login" placeholder="Password"></input>

        <button className="button-login">Submit</button>
        </>
    );
}