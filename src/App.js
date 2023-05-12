import React, { useState } from 'react';
import { Application } from './application';
import { Welcome } from './welcome';
import './app.css';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [efect, setEfect] = useState();

  return (
    <div className="App">
      <header className='App-header'>

        {efect === true && <Application isActive={efect === true} />}
       

        <Welcome />


      </header>
    </div>
  );

}

export default App;
