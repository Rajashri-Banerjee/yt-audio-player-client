import axios from 'axios'
import React from 'react'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import IconButton from '@mui/material/IconButton';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import {playNow} from '../redux/actions/audioPlayer';
import { useSelector } from 'react-redux';

function SongItem({song,setSongdetail,setPlaylist,songdetail,playing}) {
  
  const audioPlayer = useSelector((state)=>{
    return state.audioPlayer
  })
  
  const fetchsongdetail = async() => {
    const response = await axios.get('/user/audioinfo?url='+song.url)
    setSongdetail(response.data)
  }

  const deleteHandler = async() => {
    const response = await axios({
      url: '/user/playlist-remove',
      method: 'PATCH',
      data: {
        id: song._id
      }
    })
    setPlaylist(response.data.playlist)
  }

  return (
    <div className='songs-container'>
      <div className='flex'>
        <img className='song-poster'src={song.thumbnail} />
        <div>
          <p className='song-title'> 
            {song.title} 
            {
            songdetail && songdetail.yt_url == song.url && <img className='song-gif' src='https://i.gifer.com/Yw76.gif'/> 
            }
          </p>
        </div>
      </div>
      <div className='play'>
        {
          songdetail && songdetail.yt_url == song.url &&  playing?
          <IconButton><PauseOutlinedIcon style={{color:'white', width:'40px', height: '40px' }}/></IconButton>
          :
          <IconButton onClick={()=>playNow(song.url)}><PlayArrowOutlinedIcon style={{color:'white', width:'50px', height: '50px' }}/></IconButton>
        }
        <IconButton onClick={deleteHandler}><CloseOutlinedIcon style={{color:'white', width:'40px', height: '40px' }}/></IconButton>
      </div>
    </div>
  )
}

export default SongItem