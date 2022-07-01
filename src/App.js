import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Dashboard from './pages/user/Dashboard';
import Playlist from './pages/user/Playlist';
import Profile from './pages/user/Profile';
import './css/main.css';
import Login from './pages/user/Login';
import Signup from './pages/user/Signup';
import { useSelector } from 'react-redux';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import {play, pause} from './redux/actions/audioPlayer'

function App() {

	const audioPlayer = useSelector((state)=>{
		return state.audioPlayer
	})

	const [options,setOptions] = useState({
		glassBg:true,
		defaultPosition: {
			right: 30,
			bottom: 30,
		},
		remember:true,
		showMiniModeCover: true,
		autoPlay: true,
		showMiniProcessBar:true,
		showDownload: false,
	})

	const song = useSelector((state) => {
		if (state.audioPlayer.current) {
			return [{
				name: state.audioPlayer.current.title,
				cover: state.audioPlayer.current ? state.audioPlayer.current.thumbnail : 'https://i.ibb.co/CHqW7CB/MDUDE.png',
				musicSrc: state.audioPlayer.current && state.audioPlayer.current.url,
			}]
		}
		return []
	})

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage/>} />
					<Route path="/app/dashboard" element={<Dashboard/>} />
					<Route path="/app/profile" element={<Profile/>} />
					<Route path="/app/Playlist" element={<Playlist/>} />
					<Route path="/login" element={<Login/>} />
					<Route path="/signup" element={<Signup/>} />
				</Routes>
			</BrowserRouter>
			<div
				style={{
					position:'fixed',
					bottom:0,
					left:0
				}}
			>
				<ReactJkMusicPlayer  
					onAudioPlay={play}
					onAudioPause={pause}
					audioLists={song}
					className='music-player'
					{...options}
					autoPlay
				/>
			</div>
		</div>
	)
}

export default App;