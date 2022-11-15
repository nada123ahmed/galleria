import gallery from '../data.json'
import Header from './Header'
import Masonry from './Masonry'
function Gallery() {
  

  return (
    <>
    <Header/>
    <Masonry imageUrls={gallery} columnCount="4" gap="40"/>
    </>
  )
}

export default Gallery