import React from 'react'
import './cast.css';
import { useClick } from '../ClickContext'

const Cast = () => {
  const { handleClick } = useClick();
  return (
    <div className='cast'>
      <h3> <span className='material-icons' onClick={() => handleClick("castClick")}>arrow_back</span> Connect to a device</h3>
      <p>No device found</p>
      <div className='cast-div'>
      <i className='material-icons'>connected_tv</i>
      <p>Link with TV Code</p>
      </div>
      <div className='cast-div'>
      <i className='material-icons'>info</i>
      <p>Learn More</p>
      </div>
    </div>
  )
}

export default Cast