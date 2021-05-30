import React from 'react'

const Amud = (props)=>{
  
  return (
    
   <div>
      <div className='amudim'></div>
      <div className='amudTitle'>
        <h2>{props.tile.title}</h2>
        <hr id='div-line'/>
        <h3>status: {props.tile.status}</h3> 
      </div>
        
  </div>
  
  )

}

export default Amud
