import React, { useState } from "react";


export const Login = ({ user, password }) => {
    const [user1, setUser1] = useState('');
    const [password1, setPassword1] = useState(0);

    function handleChangeUsuario1(e) {
        setUser1(e.target.value);
    }
    function handleChangePassword1(e) {
        setPassword1(e.target.value);
    }

  
    function handleChangeOnClickLogin() {
        const localUser = localStorage.getItem('user', user);
        const localPassword = localStorage.getItem('password', password);
        
        const result = user1 === localUser && password1 === localPassword ? "Password y contraseña valido" : "Passwor o contraseña invalido";
        console.log("Resultado: ", result);
    }

    return (
        <>
        <img className="img-welcome" src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png'></img>
            <input className="input-login" placeholder="User" onChange={handleChangeUsuario1}></input>
            <input type="password" className="input-login" placeholder="Password" onChange={handleChangePassword1}></input>

            <button className="button-login" onClick={handleChangeOnClickLogin}>Submit</button>
        </>
    );
}