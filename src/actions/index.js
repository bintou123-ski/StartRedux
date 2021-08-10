//create action
const SelectSong = song => {
    //return action
    return {
        type:"SONG_SELECTED",
        payload:song
    };
}


 
export default SelectSong;

