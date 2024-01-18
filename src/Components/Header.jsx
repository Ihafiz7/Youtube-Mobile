import React from 'react'
import HeaderIcons from './HeaderIcons';
import { Link } from 'react-router-dom';

const Header = () => {
  function handelHomeClick () {
    (!window.scrollY) 
      ? window.location.reload ()
      : window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
  }

  return (
    <div>
      <div>
        <header>
          <div className='header-logo' onClick={handelHomeClick}>
            <img src='Youtube.png' alt='logo' className='logo' />
            <Link to='/' className='link'><p className='text'>YouTube</p></Link> 
          </div>
          <HeaderIcons />
        </header>
      </div>
    </div>
  )
}

export default Header