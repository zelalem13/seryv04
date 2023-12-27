import React from 'react'

import "../Cards/Cards.css";

const Cards = (props) => {
  
  return(
  <>
      {props ? (
        <div className="card">{props.children}</div>
      ) : (
         
        <div className="test">{props.children}</div>
      )}
      
    </>)
};

export default Cards;