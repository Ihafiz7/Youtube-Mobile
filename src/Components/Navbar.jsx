import React from 'react'
import { useClick } from '../ClickContext';
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {click, handleClick} = useClick();

    function handelHomeClick () {
        (!window.scrollY) 
            ? window.location.reload ()
            : window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
    }
  return (
    <div className='navbar'>
        <div className='nav-items' onClick={handelHomeClick}>
            <Link to="/" className='link material-icons'>home</Link>
            <span>Home</span>
        </div>
        <div className='nav-items'>
            <i className='material-icons'>smart_display</i>
            <span>Shorts</span>
        </div>
        <div className='nav-items' onClick={() => handleClick('createClick')}>
            <p><i className='material-icons'>add</i></p>   
        </div>
        <div className='nav-items'>
            <Link to='/subscriptions' className='link material-icons'>subscriptions</Link>
            <span>Subscriptions</span>
        </div>
        <div className='nav-items'>
            <Link to='/account' className='material-icons link'>account_circle</Link>
            <span>You</span>
        </div>

        { click.createClick && (
            <div className='create'>
                <div className='create-title'>
                <h3>Create</h3>
                <i className='material-icons' onClick={() => handleClick('createClick')}>close</i>
                </div>
                <div className='create-elems'>
                    <i className='material-icons'>smart_display</i>
                    <p>Create a Short</p>
                </div>
                <div className='create-elems'>
                    <i className='material-icons'>upload</i>
                    <p>Upoload a video</p>
                </div>
                <div className='create-elems'>
                    <i className='material-icons'>sensors</i>
                    <p>Go live</p>
                </div>
                <div className='create-elems'>
                    <i className='material-icons'>edit_square</i>
                    <p>Create a post</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default Navbar