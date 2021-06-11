import React from 'react';
import Footer from './Footer';
import pokeballSrc from "../assets/pokeball.svg";
import { useHistory } from "react-router-dom";
import "../pages/Pokemon.css";

const ErrorScreen = () => {
    const history = useHistory();
    return (
        <>
            <div className="pokemon">
                <button className="pokeball__button" onClick={() => history.goBack()}>
                <img className="pokeball__image" src={pokeballSrc} alt="pokeball" />
                Go back
                </button>
                <div className="pokemon__error">
                    Ups, something weird ocurred with this Pokemon. You'd better try another one!
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ErrorScreen;