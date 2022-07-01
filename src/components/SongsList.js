import React from 'react'
import SongItem from './SongItem'

function SongsList({songs,setSongdetail,setPlaylist,songdetail,playing}) {

    return (
        <div className='songs-list'>
            {
                songs.map((song,index)=>{
                    return <SongItem song={song} setSongdetail={setSongdetail} setPlaylist={setPlaylist} key={index} songdetail={songdetail} playing={playing}/>
                })
            }
        </div>
    )
}

export default SongsList