import React, { useCallback, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar'; // Assuming you have this component
import SearchResult from '../SearchResults/SearchResult'; // Assuming you have this component
import './App.css';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../utils/Spotify';

function App() {
  const [searchResult, setSearchResult] = useState([]);

  const[playlistName, setPlaylistName] = useState('New Playlist');

  const[playlistTracks, setPlaylistTracks] = useState([]);
  
  //function to search tracks..
  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResult);
  }, []);

  //function to add tracks...
  const addTrack = useCallback((track) => {
    if(playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;

    //set playlist tracks with previous tracks and the one intend to add new. 
    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  },
    [playlistTracks]
  );

 //removing tracks from playlist
  const removeTrack = useCallback(
    (track) => {
     setPlaylistTracks(prevTracks => prevTracks.filter(currentTrack => currentTrack.id !== track.id));
    },
  []);
  
  //updating playlist name
  const updatePlaylistName = useCallback(
    (name) => {
      setPlaylistName(name);

    }, []
  );

  const savePlaylist = useCallback(() => {
   const trackUris = playlistTracks.map((track) => track.uri);
   Spotify.savePlaylist(playlistName, trackUris).then(() => {
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
   });
   },[playlistName, playlistTracks]);
  

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch = {search} />
          <div className="App-playlist">
          <SearchResult searchResult={searchResult} onAdd = {addTrack}  />
          <Playlist 
          playListTracks = {playlistTracks} 
          onRemove = {removeTrack} 
          playlistName = {playlistName}
          onNameChange = {updatePlaylistName}
          onSave = {savePlaylist}
          />
      </div>
    </div>
    </div>
  );
}

export default App;
