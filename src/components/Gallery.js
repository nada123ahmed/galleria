import gallery from '../data.json'
import Card from './Card'
import Masonry from './Masonry'
console.log(gallery)

function Gallery() {
  return (
    <Masonry imageUrls={gallery} columnCount="4" gap="35"/>
  )
}

export default Gallery