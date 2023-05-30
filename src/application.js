import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './app.css';
import { ButtonPages } from './button-pages';
import { Link } from 'react-router-dom';


export const Application = () => {
  const [starships, setStarships] = useState([]);
  const [next, setNext] = useState("");

  const fetchData = () => {
    return axios.get('https://swapi.py4e.com/api/starships')
    .then((response) => {
      setNext(response.data.next);
      const mapResult = response.data.results.map((item) => {
        item.route = item.url.replace('https://swapi.py4e.com/api', '');
        return item;
      });
      setStarships(mapResult);
    });
  }
  
  useEffect(() => {
    fetchData();
  }, []);

    function onClick() {
      axios.get(next)
      .then((response) => {
        setNext(response.data.next);
        const mapNext = response.data.results.map((item) => {
          item.route = item.url.replace('https://swapi.py4e.com/api', '');
          return item;
        })
        setStarships([...starships,
          ...response.data.results,
        ])
      });
    }

  return (
    <div className="App">
      <header className='App-header '>
      <img src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png'></img>


       {starships && starships.length > 0 && starships.map((starshipsObj, index) => (
         <ul key={index} >
         <li className='App-header-li' >
        <Link to={starshipsObj.route} className='App-link' onClick={() => console.log("Click", starships)}>{starshipsObj.name}
        <p>{starshipsObj.model}</p>
        </Link>
       </li> 
         </ul>
       ))}

        { next !== null && <ButtonPages onClick={onClick} />}

       </header>
    </div>
  );

}

