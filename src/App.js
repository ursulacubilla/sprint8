import axios from 'axios';
import { useEffect, useState } from 'react';

import './App.css';

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
      <h1>STAR WARS</h1>
       {starships && starships.length > 0 && starships.map((starshipsObj, index) => (
       <p>
        <button onClick={() => console.log("Hola")}>{starshipsObj.name}
        <p>{starshipsObj.model}</p>
        </button>
       </p> 
       ))}

      
    </div>
  );

}

export default App;
