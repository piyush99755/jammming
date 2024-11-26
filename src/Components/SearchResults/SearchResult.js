import React from 'react';
import "./SearchResult.css";
import Tracklist from '../Tracklist/Tracklist';



function SearchResult( {searchResult, onAdd} ){
    return(
            
        <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist tracks = {searchResult} onAdd = {onAdd} isRemoval = {false} />
        
        </div>
);

};
export default SearchResult;