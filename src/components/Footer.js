import React from 'react';
import { Link } from "react-router-dom";

// Pics 
import PokemonPic from '../assets/pikachu.png'
import ItemsPic from '../assets/pokeball.png'
import LocationPic from '../assets/pointer.png'

const Footer = () => {
    return (
        <footer>
          <Link to="/pokemons">
            <img src={PokemonPic} alt="hola"/>Pokemons</Link>
          <Link onClick={ (event) => event.preventDefault() } to="/items">
            <img src={ItemsPic} alt=""/>Items <br/> (not available)</Link>
          <Link onClick={ (event) => event.preventDefault() } to="/home">
            <img src={LocationPic} alt=""/>Location <br/> (not available)</Link>
        </footer>
    );
};

export default Footer;