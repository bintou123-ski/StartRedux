import React from "react";
import {connect} from "react-redux";

const SongDetail = ({song}) => {
    if(!song){
        return<div>
            <h1>Select a song</h1>
            
            </div>
    }
    return ( 
        <div>
            <h1>Details for:</h1>
            <h2>Title:{song.title}</h2>
            
            <h2>Duration:{song.duration}</h2>
        </div>
     );
}
 
const mapStateToProps =(state)=>{
    return{song:state.selectedsong}
}
export default connect(mapStateToProps)(SongDetail);