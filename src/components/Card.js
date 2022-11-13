import React from 'react'

function Card({art}) {
  return (
    <div className='card'>
      <img src={art.images.gallery}/>
    </div>
)
}

export default Card