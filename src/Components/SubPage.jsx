import React from 'react'
import './subpage.css'
import Header from './Header'
import Navbar from './Navbar'
import { useClick } from '../ClickContext'

const SubPage = () => {
    const { click, handleClick} = useClick();
  return (
    <div className='subpage'>
        <div>
            <Header />
        </div>
       
       <div className='channels'>
            <div className='channel'>
                <img src='Youtube.png' alt='logo' className='channel-logo' />
                <p>Channel name</p>
            </div> 
            <div className='channel'>
                <img src='Youtube.png' alt='logo' className='channel-logo' />
                <p>Channel name</p>
            </div>
            <div className='channel'>
                <img src='Youtube.png' alt='logo' className='channel-logo' />
                <p>Channel name</p>
            </div>   
       </div>
       <div className='channels-nav'>
            <button>All</button>
            <button>Today</button>
            <button>Live</button>
            <button>Shorts</button>
            <button>Continue watching</button>
            <button>Unwatched</button>
            <button>Posts</button>
            <p onClick={() => handleClick('subPageSettingsClick')}>Settings</p>
       </div>
       <div></div>
       <div>
            <Navbar /> 
       </div>
       {click.subPageSettingsClick && (
        <div className='settings'>
            <p>What do you want to see in your subscriptions feed?</p>
            <hr />
            <p className='p-without-span'>Videos and posts</p>
            <p className='p-without-span'>Videos Only</p>
            <hr />
            <p className='material-icons p-with-span' onClick={() => handleClick('subPageSettingsClick')}>close <span>Cancel</span></p>
        </div>
       )}
       
       
    </div>
  )
}

export default SubPage