import axios from 'axios'
import store from '../store'

export async function play() {
    store.dispatch({
        type : 'MUSIC_PLAYER_PLAY'
    })
}

export async function pause() {
    store.dispatch({
        type : 'MUSIC_PLAYER_PAUSE'
    })
}

export async function playNow(url){
    const response = await axios.get('http://localhost:3001/user/audioinfo?url='+ url)
    store.dispatch({
        type : 'MUSIC_PLAYER_PLAY_NOW',
        payload : response.data
    })
}