import { combineReducers } from "redux";

const songListReducer = ()=>{
    return [
        {title:'allo maman', duration:'4:05'},
        {title:'Hey China',duration:'5:00'},
        {title:'arrive in Bamako', duration:'3:50'},
        {title:'Come back in America', duration:'3:30'}
    ]
};

const SelectedSongReducer = (SelectedSong = null,action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return SelectedSong;
}

export default combineReducers({
    songs:songListReducer,
    selectedsong:SelectedSongReducer

})