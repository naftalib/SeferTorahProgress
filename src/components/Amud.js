import React from 'react'

const Amud = (props)=>{

  // const amudComplete = {
  //   backgroundColor: 'white',
  // }
  const amudPending = {
    opacity: '0.5'
  }
  
  return (

   <div>
      <div className='amudim'
      style={!props.tile.complete ? amudPending: null}
      ></div>
      <div className='amudTitle'>
        <h2>{props.tile.title}</h2>
        <hr id='div-line'/>
        <h3>status: {props.tile.complete ? "complete":"pending"}</h3> 
      </div>
        
  </div>
  
  )

}

export default Amud
