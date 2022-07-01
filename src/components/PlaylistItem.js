import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function PlaylistItem({playlist}) {

    // const navigate = useNavigate()

    const poster = 'https://media.wired.com/photos/5f9ca518227dbb78ec30dacf/master/w_2560%2Cc_limit/Gear-RIP-Google-Music-1194411695.jpg'

    const navigationHandler = async()=>{
        //navigate('/user/playlists')
    }

    return (
        <div className='playlist-card'>
            <img className='playlist-poster' src={playlist.poster||poster}/>
            <h3 className='pl-title'>{playlist.title}</h3>
            <Link className='pl-opener' to={`/app/playlist?_id=`+playlist._id}>Go</Link>
        </div>
    )
}

export default PlaylistItem