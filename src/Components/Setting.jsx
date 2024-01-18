import React from 'react'
import { Link } from 'react-router-dom'
import './setting.css'

const Setting = () => {
  return (
    <div className='setting'>
        <div className='header'>
            <Link to="/account" className='link material-icons'>arrow_back</Link>
            <h4>Settings</h4>
        </div>
        <ul>
            <li>General</li>
            <li>Account</li>
            <li>Data Saving</li>
            <li>Autoplay</li>
            <li>Video Quality Preference</li>
            <li>Downloads</li>
            <li>Watch On TV</li>
            <li>Manage History</li>
            <li>Your data in YT</li>
            <li>Privacy</li>
            <li>Try experimental features</li>
            <li>Purchases and memberships</li>
            <li>Billing and payments</li>
            <li>Notifications</li>
            <li>Connected Apps</li>
            <li>Live Chat</li>
            <li>About</li>
        </ul>
    </div>
  )
}

export default Setting