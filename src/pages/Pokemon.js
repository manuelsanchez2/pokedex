import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchPokemon } from "../api/pokemon";
import LoadingScreen from "../components/LoadingScreen";
import ErrorScreen from "../components/ErrorScreen";
import pokeballSrc from "../assets/pokeball.svg";
import "./Pokemon.css";
import Footer from "../components/Footer";

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
    return <ErrorScreen />;
  }
  if (loading || !pokemon) {
    return <LoadingScreen />;
  }
  return (
    <>
      <div className="pokemon">
        <button className="pokeball__button" onClick={() => history.goBack()}>
          <img className="pokeball__image" src={pokeballSrc} alt="pokeball" />
          Go back
        </button>
        <main className="pokemon__info">
          <div className="pokemon__title">{pokemon.name.toUpperCase()}</div>
          <div>Nr. {pokemon.id}</div>
          <div>
            <img src={pokemon.imgSrc} alt={pokemon.name} />
          </div>
          <div>HP: {pokemon.hp}</div>
          <div>Attack: {pokemon.attack}</div>
          <div>Defense: {pokemon.defense}</div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Pokemon;
