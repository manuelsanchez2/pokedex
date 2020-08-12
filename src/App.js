import React from 'react';
import './App.css';
import List from './components/List';
import ListItem from './components/ListItem'
// import ListItemIcon from './components/ListItemIcon';
// import ListItemText from './components/ListItemText';
// import BulbasaurSrc from './assets/Bulbasaur.png'


function App() {
  return (
    <div className="app">
      <header>
        Pokedex <input placeholder="Searchi"/>
      </header>
    
      <main className="colorful-border">
        <List>
          <ListItem href= "ff">

            {/* <ListItemIcon className="pokemon__listIcon" src= "" alt="Bulbasaur"/>
            <ListItemText primary="Bulbasaur" secondary="#001"/> */}
            <div>Icono</div>
            <div style={
              {
                flexGrow: 1,
              }

            }>Text</div>
            <div>Icono</div>
          </ListItem>
        </List>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
