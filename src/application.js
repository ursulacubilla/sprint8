import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './app.css';
import { ButtonPages } from './button-pages';
import { NavBar } from './nav-bar';

export const Application = () => {
  const [starships, setStarships] = useState([]);

  const fetchData = () => {
    return axios.get('https://swapi.py4e.com/api/starships')
    .then((response) => {
      setStarships(response.data.results)
    });
    }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className='App-header '>
      <img src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png'></img>

      {/* <NavBar /> */}

       {starships && starships.length > 0 && starships.map((starshipsObj, index) => (
         <ul key={index} >
         <li className='App-header-li' >
        <button className='App-button' onClick={() => console.log("Click")}>{starshipsObj.name}
        <p>{starshipsObj.model}</p>
        </button>
        {starships === true && <img src='https://starwars-visualguide.com/assets/img/starships/5.jpg' isActive={starships === true}/>}
       </li> 
         </ul>
       ))}

        <ButtonPages />
       </header>
    </div>
  );

}

