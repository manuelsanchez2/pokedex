import React, { useEffect, useState } from "react";

import { fetchPokemons } from "../api/pokemon";
import Footer from "../components/Footer";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemIcon from "../components/ListItemIcon";
import ListItemText from "../components/ListItemText";
import LoadingScreen from "../components/LoadingScreen";

function Pokemons(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState(null);
  const [query, setQuery] = useState("");

  function waitFor(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await waitFor(1000);
      const newPokemons = await fetchPokemons();
      setPokemons(newPokemons);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading || pokemons === null) {
    return <LoadingScreen />;
  }
  const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  });

  return (
    <>
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
          {filteredPokemons?.slice(0, 151).map((pokemon) => (
            <ListItem
              key={pokemon.id}
              to={`/pokemons/${pokemon.name.toLowerCase()}`}
            >
              <ListItemIcon
                src={pokemon.imgSrc}
                alt={`Picture of ${pokemon.name}`}
              />
              <ListItemText primary={pokemon.name} secondary={pokemon.id} />
            </ListItem>
          ))}
        </List>
      </main>
      <Footer />
    </>
  );
}

export default Pokemons;
