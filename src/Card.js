import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="my-card">
      { props.children }  
    </div>
  );
}

export default Card;
