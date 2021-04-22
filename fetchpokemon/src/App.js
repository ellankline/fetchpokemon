import React, { useState } from 'react';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const fetchEm = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=808")
        .then(response => response.json())
        .then(response => setPokemon({individuals: response.results}))
    }
  


  return (
    <div className="App">
      <button onClick={fetchEm}>Fetch Pokemon</button>
      {
        pokemon.individuals ? pokemon.individuals.map((item, index)=>{
          return (
              <div key={index}>{item.name}</div>
          )
        })
        : null} 
      
    </div>
  );
}

export default App;
