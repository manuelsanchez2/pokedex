import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchPokemon } from "../api/pokemon";
import LoadingScreen from "../components/LoadingScreen";
// import pokeballSrc from "../assets/pokeball.svg";

function Pokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const fetchedPokemon = await fetchPokemon(name);
        setPokemon(fetchedPokemon);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    }
    fetchData();
  }, [name]);

  if (error) {
    return <div>ERROR!!!</div>;
  }
  if (loading || !pokemon) {
    return <LoadingScreen />;
  }
  return (
    <div>
      <button onClick={() => history.goBack()}>BACK</button>
      {/* <img src={pokeballSrc} alt="pokeball" /> */}
      <div>Name: {pokemon.name.toUpperCase()}</div>
      <div>Nr. {pokemon.id}</div>
      <div>
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      </div>
      <div>HP: {pokemon.hp}</div>
      <div>Attack: {pokemon.attack}</div>
      <div>Defense: {pokemon.defense}</div>
    </div>
  );
}

export default Pokemon;
