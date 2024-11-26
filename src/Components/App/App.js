import React, { useCallback, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar'; // Assuming you have this component
import SearchResult from '../SearchResults/SearchResult'; // Assuming you have this component
import './App.css';
import Playlist from '../Playlist/Playlist';

function App() {
  const [searchResult, setSearchResult] = useState([
    { name: 'Addicted', artist: 'Enrique', album: 'Babe', id: 1 },
    { name: 'Morocco', artist: 'Pitbull', album: 'Party', id: 2 },
  ]);

  const[playlistTracks, setPlaylistTracks] = useState([
     {name: 'Example playlist track', artist:'unknown', album:'new', id:'3'},
     {name: 'Example playlist track1', artist:'unknown1', album:'new1', id:'4'},
  ]);
  

  //function to add tracks...
  const addTrack = useCallback((track) => {
    if(playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;

    //set playlist tracks with previous tracks and the one intend to add new. 
    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  },
    [playlistTracks]
    );
  

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <SearchResult searchResult={searchResult} onAdd = {addTrack} />
        <Playlist playListTracks = {playlistTracks} />
      </div>
    </div>
  );
}

export default App;
