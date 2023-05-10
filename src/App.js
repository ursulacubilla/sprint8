import axios from 'axios';
import { useEffect, useState } from 'react';

import './app.css';
import { Logo } from './images';
import { NavBar } from './nav-bar';

function App() {
  const [starships,setStarships] = useState([]);

  const fetchData = () => {
    return axios.get('https://swapi.py4e.com/api/starships')
    .then((response) => {
      console.log(response);
      setStarships(response.data.results)});
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className='App-header '>
      <img src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png'></img>


      <NavBar />

       {starships && starships.length > 0 && starships.map((starshipsObj, index) => (
         <ul key={index} >
         <li className='App-header-li' >
        <button className='App-button' onClick={() => console.log("Hola")}>{starshipsObj.name}
        <p>{starshipsObj.model}</p>
        </button>
        {/* <img src='https://starwars-visualguide.com/assets/img/starships/5.jpg' /> */}
       </li> 
         </ul>
       ))}

      
       </header>
    </div>
  );

}

export default App;
