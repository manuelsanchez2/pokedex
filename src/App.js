import React from 'react';
import './App.css';
import List from './components/List';
import ListItem from './components/ListItem'
import ListItemIcon from './components/ListItemIcon';
import ListItemText from './components/ListItemText';
import BulbasaurSrc from './assets/Bulbasaur.png'
import PikachuSrc from './assets/Pikachu.png'
import SnorlaxSrc from './assets/Snorlax.png'
import ShoeSrc from './assets/Shoe.png'

function App() {
  return (
    <div className="app">
      <header>
        POKEDEX <input placeholder="Searchi"/>
      </header>
    
      <main className="colorful-border">
        <List>
          <ListItem href= "">

            <ListItemIcon src= {BulbasaurSrc} alt="Bulbasaur"/>
            <ListItemText primary="Bulbasaur" secondary="#001"/>
      
          </ListItem>
          <ListItem href= "ff">

            <ListItemIcon src= {PikachuSrc} alt="Pikachu"/>
            <ListItemText primary="Pikachu" secondary="#025"/>
      
          </ListItem>

          <ListItem href= "ff">

            <ListItemIcon src= {SnorlaxSrc} alt="Snorlax"/>
            <ListItemText primary="Snorlax" secondary="#143"/>
      
          </ListItem>

          <ListItem href= "ff">

            <ListItemIcon src= {ShoeSrc} alt="Shoe"/>
            <ListItemText primary="Shoe" secondary="#???"/>
      
          </ListItem>
        </List>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
