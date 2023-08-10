import React from 'react'

function Card(props) {
  return (
    <div className="card">
    <div className="card_image">
    <img src={props.data.thumbnail} alt="Card" />
    </div>
    <div className="card_content">
      <h2 className="card_title">{props.data.name}</h2>
      <p className="card_text">${props.data.pricePerNight} night</p>
      
      <button className="noselect">Read More</button>
    </div>
  </div>
  )
}

export default Card


