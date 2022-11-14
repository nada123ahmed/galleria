import React from 'react'
import logo from '../shared/logo.svg';
import {Link, useNavigate} from 'react-router-dom'

import gallery from '../data.json'
console.log(gallery[0])
function Header() {
  const img = gallery[0]
  const navigate = useNavigate();
  const viewImage = (i) => {
    console.log(img)
    navigate('/slideshow',{state: {
      art:{img, i},
      slide: true

    }
      });

  }
  return (
    <header>
        <Link to ='/'><img src={logo} alt="logo"></img></Link>
        <a onClick={() => viewImage(0)} href='/slideshow'>START SLIDESHOW</a>
    </header>
  )
}

export default Header