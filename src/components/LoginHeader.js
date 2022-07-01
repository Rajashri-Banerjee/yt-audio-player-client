import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function LoginHeader() {

  return (
    <div className='header'>
      <div className='logo'>
        <h2>You Tunes</h2>
      </div>
      <div className='header-right'>
        <Link to = '/' className='home'>Home</Link>
      </div>
    </div>
  )
}

export default LoginHeader