import React from 'react';
import './notification.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useClick } from '../ClickContext';
import Cast from './Cast';


const NotificationPage = () => {

    const {click, handleClick} = useClick();

  return (
    <div className='main'>
        <header>
            <div className='title'>
                <Link to="/" className='link material-icons'>arrow_back</Link>
                <p>Notifications</p>
            </div>
            <div className='icons'>
                <i className='material-icons' onClick={(event) => handleClick(event, 'castClick')}>cast</i>
                <Link to="/search" className='link material-icons'>search</Link>
                <i className='material-icons' onClick={(event) => handleClick(event, 'dotsClick')}>more_vert</i>
            </div>
        </header>
        <div className='noti-type'>
            <button onClick={(event) => handleClick(event, 'allButtonClick')}>All</button>
            <button onClick={(event) => handleClick(event, 'mentionsButtonClick')}>Mentions</button>
        </div>
        {click.allButtonClick && !click.mentionsButtonClick && (
            <div className='all-noti'>
                <p>No Notifications To Show Right Now.</p>
            </div>
        )}
        {click.mentionsButtonClick && !click.allButtonClick &&(
            <div className='mentions'>
                <p>No Mentions Found.</p>
            </div>
        )}

        {click.dotsClick && (
            <div className='dot'>
                <p>Settings</p>
                <p>Watch on TV</p>
                <p>Terms & privacy policy</p>
                <p>Help and feedback</p>
            </div>
        )}
        <Navbar />
        { click.castClick && (
            <Cast />
        )}
    </div>
  )
}

export default NotificationPage