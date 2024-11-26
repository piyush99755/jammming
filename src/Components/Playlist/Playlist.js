import React from 'react';
import "./Playlist.css";
import Tracklist from '../Tracklist/Tracklist';



function Playlist(props){
    return(
        <div className="Playlist">
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