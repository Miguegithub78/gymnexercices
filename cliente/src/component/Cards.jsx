import React from 'react'
import Card from './Card.jsx'
import './cards.css'

const Cards = ({cards, handleDelete}) => {
  return (
    <div className="cards">
      {cards.map(card => {
        return <Card 
          key = {card._id} 
          id = {card._id} 
          name = {card.name} 
          sets = {card.sets} 
          reps = {card.reps} 
          weight = {card.weight} 
          rest = {card.rest}
          handleDelete = {handleDelete}>
          </Card>
      })}
    </div>
  )
}

export default Cards