import React from "react";
import { Link } from "react-router-dom";



export const Welcome = () => {
    return(
        <>
        <h1>Bienvenidos</h1>

        <img className="img-welcome" src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png'></img>

        <button className="button-welcome"> <Link to="/application/" className="link-welcome">Ir a la pagina principal</Link></button> {/* aqui el routing de react */}
        
        </>
    );
}