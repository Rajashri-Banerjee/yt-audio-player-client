import axios from 'axios'
import React, {useState} from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import {useSnackbar} from 'notistack'

function SongForm({id,setPlaylist,setOpen}) {

    const [songurl,setSongurl] = useState('')
    const [loading,setLoading] = useState(false)
    
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const submitHandler = async() => {
        setLoading(true)
        const response = await axios({
            url : 'http://localhost:3001/user/playlist',
            method : 'PATCH',
            data : {
                id : id,
                url : songurl
            }
        })
        if(response.data && response.data.playlist){
            setPlaylist(response.data.playlist)
            enqueueSnackbar('Song Added Succesfully', {
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
            <form className='input-label'>
                <label>
                    Youtube Link :
                    <input
                        className='ytlink-input'
                        type="text" 
                        name="name"
                        onChange={(e) => { setSongurl(e.target.value) }}
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

export default SongForm