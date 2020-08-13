import React from 'react';
import './App.css';
import List from './components/List';
import ListItem from './components/ListItem'
import ListItemIcon from './components/ListItemIcon';
import ListItemText from './components/ListItemText';
import PokeButton from './components/PokeButton';
import { fetchPokemons } from './api/pokemon';

function App() {
  const [pokemons, setPokemons] = React.useState(null);

  const showPokemons = async () => {
    const newPokemons = await fetchPokemons();
    setPokemons(newPokemons);
  }
  
  return (
    <div className="app">
      <header>
        POKEDEX <input placeholder="Searchi"/>
        <PokeButton onClick={showPokemons}>LOAD POKEMONS</PokeButton>
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
