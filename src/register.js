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
        <input className="input-register" placeholder="Usuario" onChange={handleChangeUsuario}></input>
        <input type="password" className="input-register" placeholder="Contraseña" onChange={handleChangePassword}></input>
       

        <button className="button-register" onClick={handleChangeOnClick}>Submit</button>
        </>
    );
}


{/*defaultVale => placeholder 
    inputs => usuario y contraseña /

    cortar la logica del login (localstorage) y mudarla para la pagina de registro /

    caso exitoso de registro (usuario valido y contraseña valido)
    caso fallido de registro ()

    el boton con onclick valida lo que se escribe en el input, aqui se guarda en el localstorage para comprobar la informacion y registrar al usuario

    login caso exitoso (escribe contraseña y usuario valido), comprobar que los campos tienen informacion, recuperar los datos guardados en el localstorage, y comparar lo que el usuario esta escribiendo con lo que esta guardado ( usuario y/o contraseña valido = true)

    caso fallido (escribe usuario y contraseña invalido)(usuario y/o contraseña invalido = false)

    el boton con onclick valida los datos.!

*/}