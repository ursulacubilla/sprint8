import React, { useState } from 'react';
import { Application } from './application';
import { Welcome } from './welcome';
import './app.css';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './nav-bar';
import { Home } from './home';
import { Login } from './login';
import { Register } from './register';


function App() {
  const [efect, setEfect] = useState();

  return (
    <div className="App">
      <header className='App-header'>
        <NavBar />
        <Routes>

         <Route path='welcome' element={<Welcome /> } />  
         <Route path='home' element={<Home /> } />  
         <Route path='application' element={<Application /> } />        
         <Route path='login' element={<Login /> } />        
         <Route path='register' element={<Register /> } />        
          </Routes>        
      
      </header>
    </div>
  );

}

export default App;
