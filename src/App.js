import React, { Component } from 'react'
import './App.css'
import Tiles from './data/tiles'
import Amud from './components/Amud'

class App extends Component {

  // state = {
  //   Tiles: []
  // }

  render(){
  return (
    <div>
      <h1>Sefer Torah Progress</h1>
      <div className='container'>
        <div className='grid-4'>
          {Tiles.map(tile => 
          <Amud 
          key={tile.id}
          tile={tile}
          />)}
        </div>
        
      </div>
    </div>
  );
}
}

export default App;
