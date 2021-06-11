import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// Pages 
import Pokemons from "./pages/Pokemons";
import Items from "./pages/Items";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/pokemons/:name">
            <Pokemon />
          </Route>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/">
            <Redirect to="/pokemons" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
