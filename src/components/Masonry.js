import React, {useState} from 'react'
import './css.css'
import {Link, useNavigate} from 'react-router-dom';
function Masonry(props) {
  const navigate = useNavigate();
  const viewImage = (img, i) => {
    navigate('/slideshow',{state:{img, i}});

  }
  
  return (
    <>
    
    <div style={{columns:props.columnCount, columnGap:0, padding:props.gap / 2}}>
    {props.imageUrls.map((img, i) => (
      <div onClick={() => viewImage(img, i)} key={i} className="image" style={{padding:props.gap / 2}}>
        <div className='image-container'>
      <img className='img' src={img.images.thumbnail}    ></img>
      <div className='caption'>
        <h2>{img.name}</h2>
        <p>{img.artist.name}</p>
      </div>
      </div>
    </div>
      
    ))}
    </div>
    </>
  )
}

export default Masonry