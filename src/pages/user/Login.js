import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginHeader from '../../components/LoginHeader'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const loginHandler = async() => {
        const response = await axios ({
            url: '/user/login',
            method: 'POST',
            data: {
                username,
                password
            }
        })
        console.log(response.data)
        if(response.data && response.data.user){
            localStorage.setItem('user', JSON.stringify(response.data.user))
            localStorage.setItem('token', JSON.stringify(response.data.token))
            axios.defaults.headers.common['Authorization'] = response.data.token
            navigate('/app/dashboard')
        }
    }

    useEffect(() => {
        const user = localStorage.getItem('user')
        const token = localStorage.getItem('token')
        if(user && token){
            axios.defaults.headers.common['Authorization'] = JSON.parse(token)
            navigate('/app/dashboard')
        }
    },[])
  
    return (
    <div className='form'>
        <LoginHeader/>
        <div className='form-container'>
            <h2 className='login-heading'>User Login</h2>
            <form>
                <input
                    onChange={(e) => { setUsername(e.target.value)}}
                    placeholder='Username'
                    className='username-box'
                />
                <input
                    onChange={(e)=> { setPassword(e.target.value)}}
                    placeholder='Password'
                    className='username-box'
                />
            </form>
            <button className='p-btn auth-btn' onClick={loginHandler}>
                Login
            </button>
            <Link to="/signup">Not a user? Click here to register!</Link>
        </div>
    </div>
  )
}

export default Login