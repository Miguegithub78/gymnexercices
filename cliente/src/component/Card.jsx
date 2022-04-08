import React from 'react'


const Card = ({id, name, sets, weight, reps, rest, handleDelete }) => {
  return (
    <div>
      <div className="title"> <h2>{name}</h2> </div>
      <div className="body"> 
      <div className="body"> <h2>{sets}</h2> </div>
      <div className="body"> <h2>{reps}</h2> </div>
      <div className="body"> <h2>{weight}</h2> </div>
      <div className="body"> <h2>{rest}</h2> </div>
      </div>
      <div>
      <button className= 'but' onClick={(evt) => handleDelete(evt, id, name)}>Delete</button> 
      </div>
    </div>
  )
}

export default Card