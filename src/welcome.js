import React from "react";
import { NavBar } from "./nav-bar";


export const Welcome = () => {
    return(
        <>
        <h1>Bienvenidos</h1>
        {/* <NavBar className="nav-bar-welcome" /> */}

        <img className="img-welcome" src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png'></img>

        <button className="button-welcome" onClick={() => console.log("Welcome")}>Ir a la pagina principal</button> {/* aqui el routing de react */}
        
        </>
    );
}