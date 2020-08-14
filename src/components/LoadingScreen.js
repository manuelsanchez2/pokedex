import React from "react";
import "./LoadingScreen.css";
import Pokedex from "../assets/pokedex.png";

function LoadingScreen({ src, alt }) {
  return (
    <div className="loadingScreen">
      {" "}
      <img className="loadingScreen__icon" src={Pokedex} alt="Pokedez" />
    </div>
  );
}

export default LoadingScreen;
