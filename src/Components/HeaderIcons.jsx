import React from 'react';
import { Link } from 'react-router-dom';
import { useClick } from '../ClickContext';
import Cast from './Cast';


const HeaderIcons = () => {
  const { click, handleClick } = useClick();


  return (
    <div>
        <div className='header-icons'>
            <i className='material-icons' onClick={() => handleClick('castClick')}>cast</i>
            <Link to="/notifications" className='link'>
                <i className='material-icons'>notifications</i>
            </Link>
            <Link to='/search' className='link'>
                <i className='material-icons'>search</i>
            </Link>
        </div>
        {  click.castClick && (
            <Cast />
        )}
    </div>
    
    
  );
};

export default HeaderIcons;
