import axios from 'axios'
import React, { useState } from 'react'
import {useSnackbar} from 'notistack'
import LoadingButton from '@mui/lab/LoadingButton'


function PlaylistForm({setOpen,setPlaylists}) {

    const [playlistname,setPlaylistname] = useState('')
    const [playlistposter,setPlaylistposter] = useState('')
    const [loading,setLoading] = useState(false)

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const submitHandler = async(e) => {
        setLoading(true)
        const response = await axios({
            url : 'http://localhost:3001/user/playlist',
            method : 'POST',
            data : {
                title : playlistname,
                poster : playlistposter
            }
        })
        if(response.data && response.data.playlists){
            setPlaylists(response.data.playlists)
            enqueueSnackbar('Playlist Created Succesfully', {
                variant: 'success',
                autoHideDuration: 1000,
                anchorOrigin: {
                    vertical:'bottom',
                    horizontal:'center'
                },
            });
            setOpen(false)
        }
        setLoading(false)
    }

    return (
        <div className='songform'>
            <form>
                <label>
                    Playlist Title :
                    <input
                        className='ytlink-input'
                        style={{marginLeft:'18px'}}
                        type="text"
                        name="name"
                        onChange={(e) => { setPlaylistname(e.target.value) }}
                    />
                </label>
                <label>
                    Playlist Poster :
                    <input
                        className='ytlink-input'
                        type="text"
                        name="name"
                        onChange={(e) => { setPlaylistposter(e.target.value) }}
                    />
                </label>
            </form>
            <LoadingButton 
                variant="contained"
                onClick={submitHandler}
                loading={loading}
                sx={{
                    backgroundColor:'black',
                    color : 'white',
                    padding : '5px 20px',
                    cursor: 'pointer',
                    '&:hover': {
                        color: 'white',
                        backgroundColor: 'rgba(3,1,44,1)'
                    }
                }}
            >
                Submit
            </LoadingButton>
        </div>
    )
}

export default PlaylistForm