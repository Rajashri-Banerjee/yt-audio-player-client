import React from 'react'
import {Link} from 'react-router-dom'
import HomeHeader from '../components/HomeHeader'
import {useSelector} from 'react-redux'

function Homepage() {

  const audioPlayer = useSelector((state)=>{
    return state
  })
  console.log(audioPlayer)

  return (
    <div>
      <HomeHeader/>
      <div className='homepage'>
        <div className='homepage-des'>
            <div>
              <h2 className='home-heading'><span>PLAY</span><span>THE</span><span> MOMENT</span></h2>
              <p className='home-des'><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span><span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span></p>
            </div>
            <Link className='get-started' to="/signup">Get Started</Link>
        </div>
        <div className='ill-container'>
          <img src='https://i.ibb.co/zhm2P6Y/undraw-happy-music-g6wc-1-1.png'/>
        </div>
      </div>
    </div>
  )
}

export default Homepage