import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginHeader from '../../components/LoginHeader'

function Signup() {
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const signupHandler = async(e) => {
        const response = await axios ({
            url: 'http://localhost:3001/user/signup',
            method: 'POST',
            data: {
                fullname,
                username,
                password,
                email
            }
        })
        console.log(response.data)
        if(response.data && response.data.user){
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            axios.defaults.headers.common['Authorization'] = null
            navigate('/login')
        }
    } 

  return (
    <div>
        <LoginHeader/>
        <div className='form-container'>
            <h2 className='reg-heading'>User Registration</h2>
            <form>
                <input
                    onChange={(e)=>{ setFullname(e.target.value)}}
                    placeholder='Fullname'
                    className='username-box'
                />
                <input
                    onChange={(e)=>{ setUsername(e.target.value)}}
                    placeholder='Username'
                    className='username-box'
                />
                <input
                    onChange={(e)=>{ setPassword(e.target.value)}}
                    placeholder='Password'
                    className='username-box'
                />
                <input
                    onChange={(e)=>{ setEmail(e.target.value)}}
                    placeholder='Email ID'
                    className='username-box'
                />
            </form>
            <button className='p-btn auth-btn' onClick={signupHandler}>
                Register
            </button>
            <Link to="/login">Already an user? Click here!</Link>
        </div>
    </div>
  )
}

export default Signup