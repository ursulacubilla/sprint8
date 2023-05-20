import React from "react";

export const Register = () => {
    return(
        <>
        <input className="input-register" defaultValue="First Name"></input>
        <input className="input-register" defaultValue="Second Name"></input>
        <input className="input-register" defaultValue="Surname"></input>

        <button className="button-register">Submit</button>
        </>
    );
}