
import { useState } from 'react';
import {useLocation} from 'react-router-dom';
import back from '../shared/icon-back-button.svg'
import next from '../shared/icon-next-button.svg'
import view from '../shared/icon-view-image.svg'

function Slideshow() {
  const location = useLocation();
  const art = location.state
  const [data, setData] = useState({img: "", i: 0})
console.log(data)

  const viewImage = (img, i) => {
    setData({img, i})
    document.body.style.overflowY = "hidden";
  }
  const closeImage = () => {
    setData({img: "", i: 0})
    document.body.style.overflowY = "unset";
  }
  return (
    <>
    {data.img && 
      <section onClick={closeImage} className='overlay'>
        <section className='zoom-image'>
          <img src={data.img.images.gallery}></img>
          <span onClick={closeImage} className='close'>CLOSE</span>
        </section>
      </section>
      }
    <section >
      
    <section className='slideshow-container'>
      <section className='image-container'>
      <div className="image-container__image">
      <img src={art.img.images.hero.large}    ></img>
      <div onClick={() => viewImage(art.img, art.i)} className='view-image'>
        <div><img src={view}></img></div>
        <span>VIEW IMAGE</span>
      </div>
    
    </div>
    <div className='image-container__caption'>
        <div className='text'>
        <h2>{art.img.name}</h2>
        <p>{art.img.artist.name}</p>
        </div>
        <div className='artist'>
          <img src={art.img.artist.image}></img>
        </div>
      </div>
    </section>
    <div className='description'>
      <span className='year'>{art.img.year}</span>
      <p>{art.img.description}</p>
      <span>GO TO SOURCE</span>
    </div>
    </section>
    <section className='progress-container'>
      <section className='slide-name'>
        <h4>{art.img.name}</h4>
        <p>{art.img.artist.name}</p>
      </section>
      <section className='controls'>
      <img src={back}></img>
      <img src={next}></img>
      </section>
    </section>
    </section>
  </>
  )
}

export default Slideshow