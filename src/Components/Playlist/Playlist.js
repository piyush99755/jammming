import React, { useCallback } from 'react';
import "./Playlist.css";
import Tracklist from '../Tracklist/Tracklist';



const Playlist = (props) =>{
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        },
        [props.onNameChange]
    );
    return(
        <div className="Playlist">
            <label for='playlist'>Playlist</label>
            <input onChange = {handleNameChange} defaultValue = {'New Playlist'} />
        <Tracklist 
        tracks = {props.playListTracks}
        isRemoval = {true}
        onRemove = {props.onRemove} 
        />
        <button className="Playlist-save">
          SAVE TO SPOTIFY
        </button>
      </div>
);

};
export default Playlist;