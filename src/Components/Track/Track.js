import React from 'react';
import "./Track.css";
import { Button } from 'bootstrap';



function Track(){
  
  const renderAction = () => {
    if(this.props.isRemoval){
      return(
        <button>-</button>
      )
    }
    else{
      return(
        <button>+</button>
      )
    }
  

  }
    return(
            
      <div className="Track">
      <div className="Track-information">
        
      </div>
      
      </div>
);

};
export default Track;