import React, { useCallback } from 'react';
import "./Playlist.css";
import Tracklist from '../Tracklist/Tracklist';



const Playlist = ({playListTracks, onRemove, onSave, onNameChange}) =>{
    const handleNameChange = useCallback(
        (event) => {
            onNameChange(event.target.value);
        },
        [onNameChange]
    );
    return(
        <div className="Playlist">
            
            <input id='playlist-text' onChange = {handleNameChange} defaultValue = {'New Playlist'} />
        <Tracklist 
        tracks = {playListTracks}
        isRemoval = {true}
        onRemove = {onRemove} 
        />
        <button className="Playlist-save" onClick = {onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
);

};
export default Playlist;