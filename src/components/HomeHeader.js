import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function HomeHeader() {

  return (
    <div className='header'>
      <div className='logo'>
        <h2>You Tunes</h2>
      </div>
      <div className='header-right'>
        <Link to = '/' className='home'>Home</Link>
        <Link to = '/login' className='home'>Login</Link>
      </div>
    </div>
  )
}

export default HomeHeader