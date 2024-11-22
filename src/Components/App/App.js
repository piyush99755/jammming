//import logo from '../App/';
import "./App.css";
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from "../SearchResults/SearchResult";


class App extends React.Component{
  render() {
    return (
      <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
        <div className="App">
        <SearchBar />
        <SearchResult />
        
        </div>
      </div>
    
  );
    
  }
}

export default App;
