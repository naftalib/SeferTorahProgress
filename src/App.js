import React, { Component } from 'react'
import './App.css'
import Tiles from '..data/tiles'
import Amud from '../components/Amud'

class App extends Component {

  state = {
    yeria: Tiles
  }

  render(){
  return (
    <div>
      <h1>Sefer Torah Progress</h1>
      <div className='container'>
        <div>
          {this.state.yeria.map(tile => 
          <Amud 
          key={tile.id}
          title={tile.title}
          />)}
        </div>
        
      </div>
    </div>
  );
}
}

export default App;
