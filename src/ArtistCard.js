import React from 'react';
import Card from './Card.js'
import './ArtistCard.css';

function ArtistCard(props) {
  return (
    <Card>
      <h2>{props.name}</h2>
      <h3>{props.genre}</h3>
    </Card>
  );
}

export default ArtistCard;
