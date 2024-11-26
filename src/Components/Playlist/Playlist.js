import React from 'react';
import "./Playlist.css";
import Tracklist from '../Tracklist/Tracklist';



function Playlist( {playListTracks}){
    return(
        <div className="Playlist">
        <Tracklist tracks = {playListTracks} />
        <button className="Playlist-save">
          SAVE TO SPOTIFY
        </button>
      </div>
);

};
export default Playlist;