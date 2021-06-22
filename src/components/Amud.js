import React from 'react'
import img from '../data/imgs/img.png'

const Amud = (props)=>{
  
  return (

   <div>
      <img src={img} alt="amud" 
      //conditional render to define class name - determines if scalable or not
      className={!props.tile.complete ? 'amud':'amud scale'}
      //condit render defines opacity
      style={props.tile.complete ? {opacity: '1'}: {opacity: '0.5'}}
      />
      <div className='amudTitle'>
        <h2>{props.tile.title}</h2>
        <hr className='div-line'/>
        <h3>status: {props.tile.complete ? "complete":"pending"}</h3> 
      </div>
        
  </div>
  
  )

}

export default Amud
