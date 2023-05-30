import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Starship = () => {
    const [datasNave, setDatasNaves] =useState();
    const { starshipId } = useParams();

    function fetchData() {
        const apiUrl = 'https://swapi.py4e.com/api/starships/' + starshipId;
        axios.get(apiUrl)
        .then((response) => {
            setDatasNaves(response.data);
        })
    };
    useEffect(() => {
        fetchData();
    }, []); 
    

    return(
        <>
        
        {datasNave ?  <>
        <h2>{datasNave.name}</h2>
        <img src={'https://starwars-visualguide.com/assets/img/starships/' + starshipId + '.jpg'} className="img-Starship"/>
        <p className="p-Starship"><b>MODEL:</b>{datasNave.model}</p>
        <p className="p-Starship"><b>STARSHIP CLASS:</b> {datasNave.starship_class}</p>
        <p className="p-Starship"><b>MANUFACTURER:</b> {datasNave.manufacturer}</p>
        <p className="p-Starship"><b>COST:</b> {datasNave.cost_in_credits} CREDITS</p>
        <div className="div-starship">
        <div className="div-starship-1"> 
        <p className="p-Starship"><b>CREW:</b> {datasNave.crew}</p>
        <p className="p-Starship"><b>PASSENGER CAPACITY:</b> {datasNave.passengers}</p>
        <p className="p-Starship"><b>CARGO CAPACITY:</b> {datasNave.cargo_capacity} TONS</p>
        <p className="p-Starship"><b>CONSUMABLES:</b> {datasNave.consumables} MONTHS</p>
        </div>
        <div className="div-starship-2">  
        <p className="p-Starship"><b>LENGTH:</b> {datasNave.length} METERS</p>
        <p className="p-Starship"><b>MAXIMUN ATMOSPHERING SPEED:</b> {datasNave.max_atmosphering_speed} KM/H</p>
        <p className="p-Starship"><b>HYPERDRIVE RATING:</b> {datasNave.hyperdrive_rating}</p>
        <p className="p-Starship"><b>MAXIMUN SPEED IN REALSPACE:</b> {datasNave.mglt} MGLT</p>
        </div>

        </div>

        </> : null }
        </>
    );
}

// 'https://starwars-visualguide.com/assets/img/starships/5.jpg'