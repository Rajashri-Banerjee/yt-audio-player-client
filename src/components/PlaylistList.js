import React from 'react'
import PlaylistItem from './PlaylistItem'

function PlaylistList({playlists}) {

    return (
        <div className='playlist-container'>
            {
                playlists.map((playlist,index)=>{
                    return <PlaylistItem playlist={playlist} key={index}/>
                })
            }
        </div>
    )
}

export default PlaylistList