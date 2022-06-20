import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <img src={props.imageUrl} alt='Location' className='card--image' />
      <div className='card--stats'>
        <div className='top-head'>
          <img
            src='https://img.icons8.com/material-outlined/344/marker.png'
            alt='reviews'
            className='card--star'
          />
          <span className='card--location'>{props.location}</span>
          <a className='card--map' href={props.googleMapsUrl}>
            View in Google Maps
          </a>
        </div>
        <h1>{props.title}</h1>
        <span className='bold thin'>
          {props.startDate} - {props.endDate}
        </span>
        <p className='card--desc'>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
