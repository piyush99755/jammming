import React from 'react';
import { useState, useCallback } from 'react';
import "./SearchBar.css";



const SearchBar = ({onSearch}) => {
    const[term, setTerm] = useState("");
    
    //function to kick out on onChange event
    const handleTermChange = useCallback((event) => {
       setTerm(event.target.value);
    }, []);

    const search = useCallback((event) => {
      if(term){
        onSearch(term);
      }
    }, [onSearch, term]) ;


    return(
            
        <div className="SearchBar">
          <input id= "songArea" placeholder="Enter A Song Title" onChange = {handleTermChange} />
          <button className="SearchButton" onClick = {search}>
            SEARCH
          </button>
        </div>
      
);

};
export default SearchBar;
       
