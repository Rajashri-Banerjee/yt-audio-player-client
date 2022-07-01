const initialState = {
    isPlaying : false,
    isLoading : false,
    current : null,
    queue : []
}

const audioPlayer = (state=initialState, action) => {
    switch(action.type) {
        case 'MUSIC_PLAYER_PLAY':
            return {
                ...state,
                isPlaying : true
            }
        case 'MUSIC_PLAYER_PAUSE':
            return {
                ...state,
                isPlaying : false
            }
        case 'MUSIC_PLAYER_PLAY_NOW':
            return {
                ...state,
                current : action.payload
            }
        default :
            return state
    }
}

export default audioPlayer