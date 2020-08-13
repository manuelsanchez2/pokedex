import React from 'react';
import './App.css';
import List from './components/List';
import ListItem from './components/ListItem'
import ListItemIcon from './components/ListItemIcon';
import ListItemText from './components/ListItemText';
import PokeButton from './components/PokeButton';

const bulbasaur = {
  name: "Bulbasaur",
  id: "#001",
  imgSrc: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg",
  link: "#bulbasaur",
}

const ivysaur = {
  name: "Ivysaur",
  id: "#002",
  imgSrc: "https://img.pokemondb.net/artwork/large/ivysaur.jpg",
  link: "#ivysaur",
}

const venusaur = {
  name: "Venusaur",
  id: "#003",
  imgSrc: "https://img.pokemondb.net/artwork/large/venusaur.jpg",
  link: "#venusaur",
}

const charmander = {
  name: "Charmander",
  id: "#004",
  imgSrc: "https://img.pokemondb.net/artwork/large/charmander.jpg",
  link: "#charmander",
}

const charmeleon = {
  name: "Charmeleon",
  id: "#005",
  imgSrc: "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
  link: "#charmeleon",
}

const charizard = {
  name: "Charizard",
  id: "#006",
  imgSrc: "https://img.pokemondb.net/artwork/large/charizard.jpg",
  link: "#charizard",
}

const allPokemons = [bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard];

const showPokemons = () => {
  alert("bulbasaur");
}

// const [pokemons, setPokemons] = React.useState([]);

function App() {
  return (
    <div className="app">
      <header>
        POKEDEX <input placeholder="Searchi"/>
        <PokeButton onClick={() => showPokemons()}>LOAD POKEMONS</PokeButton>
      </header>
    
      <main className="colorful-border">
        <List>
          {allPokemons.map((pokemon) => (
            <ListItem ley={pokemon.id.toString()} href= {pokemon.link}>
              <ListItemIcon src= {pokemon.imgSrc} alt={`Picture of ${pokemon.name}`}
              />
               <ListItemText primary={pokemon.name} secondary={pokemon.id}/>
            </ListItem>
          ))};
        </List>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
