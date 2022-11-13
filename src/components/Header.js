import React from 'react'
import logo from '../shared/logo.svg';
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header>
        <Link to ='/'><img src={logo} alt="logo"></img></Link>
        <Link to='/slideshow'>START SLIDESHOW</Link>
    </header>
  )
}

export default Header