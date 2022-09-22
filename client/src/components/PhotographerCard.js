import React from 'react'

function PhotographerCard(props) {
  return (
    <div class="photographer-card">
      <h3>{props.name}</h3>
      <p>{props.location}</p>
    </div>
  )
}

export default PhotographerCard