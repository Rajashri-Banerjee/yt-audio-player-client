import React,{useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string' 
import axios from 'axios'
import SongsList from '../../components/SongsList'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import SongForm from '../../components/SongForm'
import Modal from '@mui/material/Modal'
import Header from '../../components/Header'


function Playlist() {
  
  const [playlist,setPlaylist] = useState(null)
  const [songdetail,setSongdetail] = useState(null)
  const [open, setOpen] = useState(false)
  const [playing, setPlaying] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const parsed = queryString.parse(location.search);

  const fetchplaylist =  async () => {
    const response = await axios.get('/user/playlist?_id='+parsed._id)
    setPlaylist(response.data.playlist)
  }

  const deleteHandler = async () => {
    const response = await axios({
      url : '/user/playlist',
      method : 'DELETE',
      data : {
        id : parsed._id
      }
    })
    console.log(response.data)
    navigate("/app/dashboard")
  }

  useEffect(() => {
		fetchplaylist()
	},[]);

  return (
    <div>
      <Header/>
      <div>
        <Modal
          open={open}
          onClose={()=>setOpen(false)}
        >
          <div style={style}>
            <SongForm id={parsed._id} setPlaylist={setPlaylist} setOpen={setOpen}/>
          </div>
        </Modal>
        <div className='btn2-container' style={{top: '20px'}}>
          {
          playlist && 
            <h2 style={{color:'#C1C1C1', letterSpacing: '1px'}} className='playlist-head'>{playlist.title}</h2>
          }
          <div>
            <button className='s2-btn' onClick={()=>setOpen(!open)}>Add Song</button>
            <button className='s-btn d-btn' onClick={deleteHandler}>Remove Playlist</button>
          </div>
        </div>
      </div>
      {
        playlist && 
        <SongsList songs={playlist.list} setSongdetail={setSongdetail} setPlaylist={setPlaylist} songdetail={songdetail} playing={playing}/>
      }
    </div>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default Playlist