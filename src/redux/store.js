import {configureStore} from '@reduxjs/toolkit'
import audioPlayer from './reducers/audioPlayer'

const store = configureStore({
    reducer : {
        audioPlayer : audioPlayer,
        user : ()=>'hello'
    }
})

export default store