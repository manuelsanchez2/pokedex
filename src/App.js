import React from 'react';
import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="app">
      <header>
        Pokedex <input placeholder="Searchi"/>
      </header>
    
      <main className="colorful-border">
        <List>
          Hola
        </List>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
