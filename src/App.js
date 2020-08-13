import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import ListItem from './components/ListItem'
import ListItemIcon from './components/ListItemIcon';
import ListItemText from './components/ListItemText';
import { fetchPokemons } from './api/pokemon';

function waitFor(time){
  return new Promise((resolve) => setTimeout(resolve, time));
}
function App() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    async function fetchData () {
      await waitFor(1000);
      const newPokemons = await fetchPokemons();
      setPokemons(newPokemons);
    }
    fetchData();
  }, []);
  
  return (
    <div className="app">
      <header>
        POKEDEX <input placeholder="Search your Pokemon"/>
      </header>
    
      <main className="colorful-border">
        <List>
          {pokemons?.map((pokemon) => (
            <ListItem key={pokemon.id} href= {pokemon.link}>
              <ListItemIcon src= {pokemon.imgSrc} alt={`Picture of ${pokemon.name}`}
              />
               <ListItemText primary={pokemon.name} secondary={pokemon.id}/>
            </ListItem>
          ))}
        </List>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
