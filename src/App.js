import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import ListItemText from "./components/ListItemText";
import { fetchPokemons } from "./api/pokemon";
import LoadingScreen from "./components/LoadingScreen";
// Podemos importar funciones y cambiarle el nombre
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function waitFor(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await waitFor(2000);
      const newPokemons = await fetchPokemons();
      setPokemons(newPokemons);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading || pokemons === null) {
    return <LoadingScreen />;
  }
  const filteredPokemons = pokemons?.filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  });

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/pokemons">
            <header>
              POKEDEX{" "}
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search your pokemon"
              />
            </header>
            <main className="colorful-border">
              <List>
                {filteredPokemons?.map((pokemon) => (
                  <ListItem key={pokemon.id} href={pokemon.link}>
                    <ListItemIcon
                      src={pokemon.imgSrc}
                      alt={`Picture of ${pokemon.name}`}
                    />
                    <ListItemText
                      primary={pokemon.name}
                      secondary={pokemon.id}
                    />
                  </ListItem>
                ))}
              </List>
            </main>
          </Route>
          <Route path="/items">ITEMS</Route>
          <Route path="/">
            <Redirect to="pokemons" />
          </Route>
        </Switch>
        <footer>
          <Link to="/pokemons">Pokemons</Link>
          <Link to="/items">Items</Link>
          <Link to="/home">Home</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
