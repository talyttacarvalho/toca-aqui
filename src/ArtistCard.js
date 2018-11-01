import React from 'react';
import Card from './Card.js';
import './ArtistCard.css';
import PropTypes from 'prop-types';

function ArtistTrack(props){
  return(
  <li className={props.className}>
    {props.title} < br/>
    <iframe src= {props.url}/>
  </li>)
}

ArtistTrack.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string
}

class ArtistCard extends React.Component{

  constructor(props){
    super(props);
    this.state = {tracks: []}
    this.getArtistTracks = this.getArtistTracks.bind(this);
  }

  getArtistTracks(event){
    const BASE_URL = 'https://peaceful-badlands-98440.herokuapp.com';
    const options = {
      method: 'get',
      credentials: 'include',
    };
    fetch(`${BASE_URL}/artists/${this.props.id}/tracks`, options)
    .then(res => res.json())
    .then(data => {
      if(data.length === 0){
        this.setState({ tracks: [{title:'Não tem nada'}] })
      }else{
        this.setState({ tracks: data })
      }
    });
    // alert(this.props.id);
  }

  render(){
    return(
      <Card>
        <h2>{this.props.name}</h2>
        <h3>{this.props.genre}</h3>
        <button onClick={this.getArtistTracks}>ver musicas</button>
        <ul>
          {this.state.tracks.map((track, index) => <ArtistTrack key={index} {...track}/>)}
        </ul>
      </Card>
    )
  }
}

ArtistCard.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default ArtistCard;