import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player/youtube'
import axios from 'axios'
import ReactAudioPlayer from 'react-audio-player'
import PlaylistList from '../../components/PlaylistList'
import PlaylistForm from '../../components/PlaylistForm'
import Modal from '@mui/material/Modal'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

function Dashboard() {

    const [videoDetails, setVideoDetails] = useState(null)
	const [playlists, setPlaylists] = useState([])
	const [open, setOpen] = useState(false)
	const [user, setUser] = useState({})

	const navigate = useNavigate()

	const fetchplaylists = async() => {
		const response = await axios.get('http://localhost:3001/user/playlists')
		setPlaylists(response.data.playlists)
	}

	useEffect(() => {
		const user = localStorage.getItem('user')
        const token = localStorage.getItem('token')
        if(user && token){
            axios.defaults.headers.common['Authorization'] = JSON.parse(token)
        }
		if(!user){
			navigate('/login')
		}
		fetchplaylists()
		setUser(JSON.parse(user))
	},[]);

	return (
		<div>
			<Header user = {user}/>
			<div className='btn-container'>
				<h2 style={{color:'#C1C1C1', letterSpacing: '1.5px'}} className='playlist-head'>Playlists</h2>
				<button className='s-btn' onClick={()=>setOpen(!open)}>Add New</button>
			</div>
			<div className='duck'><PlaylistList playlists={playlists} setPlaylists={setPlaylists}/></div>
			<div>
				<Modal
					open={open}
					onClose={()=>setOpen(false)}
				>
					<div style={style}>
						<PlaylistForm setOpen={setOpen} setPlaylists={setPlaylists}/>
					</div>
				</Modal>
			</div>
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

export default Dashboard