import React from "react";
import { useState } from "react";

export const Register = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState(0);

    function handleChangeUsuario(e) {
        setUser(e.target.value);
    }
    function handleChangePassword(e) {
        setPassword(e.target.value);
    }
    function handleChangeOnClick() {
        localStorage.setItem('user', user);
        localStorage.setItem('password', password);
    }

    return(
        <>
        <img className="img-welcome" src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png'></img>
        <input className="input-register" placeholder="Usuario" onChange={handleChangeUsuario}></input>
        <input type="password" className="input-register" placeholder="Contraseña" onChange={handleChangePassword}></input>
       

        <button className="button-register" onClick={handleChangeOnClick}>Submit</button>
        </>
    );
}

