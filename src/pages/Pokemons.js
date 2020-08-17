import React, { useState, useEffect } from "react";

import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemIcon from "../components/ListItemIcon";
import ListItemText from "../components/ListItemText";
import { fetchPokemons } from "../api/pokemon";
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
          {filteredPokemons?.map((pokemon) => (
            <ListItem key={pokemon.id} href={pokemon.link}>
              <ListItemIcon
                src={pokemon.imgSrc}
                alt={`Picture of ${pokemon.name}`}
              />
              <ListItemText primary={pokemon.name} secondary={pokemon.id} />
            </ListItem>
          ))}
        </List>
      </main>
    </>
  );
}

export default Pokemons;
