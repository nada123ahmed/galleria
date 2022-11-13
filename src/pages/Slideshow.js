
import {useLocation} from 'react-router-dom';

function Slideshow() {
  const location = useLocation();
  const art = location.state
  console.log(art)

  return (
    <section className='slideshow-container'>
      <div className="image">
        <div className='image-container'>
      <img src={art.img.images.hero.small}    ></img>
      <div className='caption'>
        <h2>{art.img.name}</h2>
        <p>{art.img.artist.name}</p>
      </div>
      </div>
    </div>
    <div>
      <p>{art.img.description}</p>
    </div>
    </section>
  )
}

export default Slideshow