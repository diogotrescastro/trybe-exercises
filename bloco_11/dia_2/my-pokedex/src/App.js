import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

// Para compreensão do contéudo e exercicio foi necessário recriar passo a passo o gabarito disponivel em https://app.betrybe.com/course/front-end/react/components/solutions

function App() {
  return (
    <div className='App'>
      <h2>Pokedex</h2>
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
