import React from 'react';
import "./SearchResult.css";
import Tracklist from '../Tracklist/Tracklist';



const SearchResult = ({searchResult, onAdd}) =>{
    return(
            
        <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist tracks = {searchResult} onAdd = {onAdd} />
        
        </div>
);

};
export default SearchResult;