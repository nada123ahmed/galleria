import gallery from '../data.json'
import Card from './Card'
import Header from './Header'
import Masonry from './Masonry'
import {Link, useNavigate} from 'react-router-dom';
function Gallery() {
  

  return (
    <>
    <Header/>
    <Masonry imageUrls={gallery} columnCount="4" gap="35"/>
    </>
  )
}

export default Gallery