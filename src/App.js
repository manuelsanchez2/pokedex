import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import ListItem from './components/ListItem'
import ListItemIcon from './components/ListItemIcon';
import ListItemText from './components/ListItemText';
import { fetchPokemons } from './api/pokemon';
// import pokedexSrc from './assets/pokedex.png';
import LoadingScreen from './components/LoadingScreen';

function waitFor(time){
  return new Promise((resolve) => setTimeout(resolve, time));
}
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    async function fetchData () {

      await waitFor(1000);
      setIsLoading(true)
      const newPokemons = await fetchPokemons();
      setPokemons(newPokemons);
      setIsLoading(false);
    }
    fetchData();
  }, []);

 if (isLoading || pokemons === null) {
   return <LoadingScreen/>
 }


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
