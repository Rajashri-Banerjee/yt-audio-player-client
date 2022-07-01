import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

function Header({user}) {

  const navigate = useNavigate()

  const logoutHandler = async() => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    axios.defaults.headers.common['Authorization'] = null
    navigate('/')
  }

  return (
    <div className='header'>
      <div className='logo'>
        <h2>You Tunes</h2>
      </div>
      <div className='header-right'>
        <Link to = '/' className='home'>Home</Link>
        <Link to = '/app/dashboard' className='home'>Dashboard</Link>
        <button onClick={logoutHandler} className='logout-btn home'>
          Logout
        </button>
        <img src='https://robohash.org/123' className='user-icon'/>
        <p style={{color: 'white',marginLeft: '10px', marginRight: '10px'}}>{user && user.fullname}</p>
      </div>
    </div>
  )
}

export default Header