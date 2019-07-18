import React from 'react';
import logo from './logo.svg';

import Mybutton from "./1.js";
import profil from "./profil.jpg"

function App() {
  return (
    <div className="App">
      
   
    <Mybutton
        btn="profilelink"
        onSimpleClick={() => {
         }}
    />
    <header className="App-header"></header>
    <img src={profil} />
    </div>
  );
}

export default App;
