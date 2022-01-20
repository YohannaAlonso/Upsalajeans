import React from 'react';
import { ItemListContainer } from './components/ItemListContainer';
import {NavBar} from './components/NavBar'
import {ItemCount} from './components/ItemCount'

//import './App.css';
//import './components/NavBar.js';

function App() {
  return <>

      <header>
      <NavBar />
      <ItemListContainer saludo="Bienvenido al contador"/>
     
      <ItemCount stock='5' initial='1' /> 

    </header>
   

  </>
}

export default App;
