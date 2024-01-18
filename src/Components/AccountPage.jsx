import React from 'react'
import HeaderIcons from './HeaderIcons'
import { Link } from 'react-router-dom'
import './accountPage.css'
import Navbar from './Navbar'

const AccountPage = () => {
  return (
    <div className='account'>
        <header>
            <div className='header-div'>
                <div></div>
                <div className='header-con'>
                <HeaderIcons />
                <Link to='/setting' className='link material-icons'>settings</Link>
                </div> 
            </div>
        </header>
        <div className='body'>
            <div className='accounts'>
                <img src='Youtube.png' alt='logo' className='account-picture' />
                <div className='acc-details'>
                    <h3>Account Name</h3>
                    <p>@Channels • View Channel <span className='material-icons'>arrow_forward_ios</span> </p>
                </div>
            </div>
            <div className='buttons'>
                <button><span className='material-icons'>switch_account</span>Switch Account</button>
                <button><span className='material-icons'>person</span>Google Account</button>
                <button><span className='material-icons'>public_off</span>Trun on Incognito</button>
            </div>
            <div className='historys'>
                <div className='history'>
                    <h3>History</h3>
                    <button>View all</button>
                </div>
                <div>No History To Show</div>
            </div>
            <div className='historys'>
                <div className='history'>
                    <h3>PlayList</h3>
                    <button>View all</button>
                </div>
                <div>Playlist Not Found</div>
            </div>
            <div className='acc-etc'>
                <div className="items">
                    <i className='material-icons'>smart_display</i>
                    <p>Your Videos</p>
                </div>
                <div className="items">
                    <i className='material-icons'>download</i>
                    <p>Downloads</p>
                </div>
                <div className="items">
                    <i className='material-icons'>movie</i>
                    <p>Your Movies</p>
                </div>
                <div className="items">
                    <i className='material-icons'>workspace_premium</i>
                    <p>Get Youtube Premium</p>
                </div>
                <div className="items">
                    <i className='material-icons'>insert_chart</i>
                    <p>Time Watched</p>
                </div>
                <div className="items">
                    <i className='material-icons'>help</i>
                    <p>Help and feedback</p>
                </div>
            </div>
        </div>
        <nav >
            <Navbar />
        </nav>
    </div>
  )
}

export default AccountPage