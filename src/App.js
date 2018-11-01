import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import ArtistCard from './ArtistCard.js';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: []
    };

    this.handleClick = this.handleClick.bind(this);

  }
  componentDidMount() {
    const BASE_URL = 'https://peaceful-badlands-98440.herokuapp.com';
    const BASE_OPTIONS = {

    }
    const options = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email: 'rafael@laboratoria.la', password: 'banana' })
    };
    fetch(`${BASE_URL}/login`, options)
      // .then(data => console.log(data));
      .then(res => {
        const options = {
          method: 'get',
          credentials: 'include',
        };
        fetch(`${BASE_URL}/artists`, options)
          .then(res => res.json())
          .then(data => this.setState({ artists: data }));
      })
  }
  handleClick() {
  }
  render() {
    return (
      <div>
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/artists">Artistas</Link>
          <Link to="/about">Sobre nós</Link>
          <Link to="/contato">Entre em contato</Link>
        </nav>

        {/* <Route path="/about/:id" render={ ({ match }) => "oi" + match.params.id }/> */}
        <Route path="/contato" render={() => "Entre em contato com a Laboratória"} />
        <Route path="/about" component={About} />

        <Route path="/artists" render={() =>
          <div>
            {this.state.artists.map(artist => <ArtistCard {...artist} key={artist.id} />)}
          </div>
        }/>


        <Route path="/about/yes" render={() => "Isso mesmo."} />
        
      </div>
      );
    }
  }

  const About = () => {
    return(
      <div>
      <h1>Legal</h1>
        Nós somos demais!
        <Link to="/about/yes">Clique aqui</Link>

        <Route path="/about/yes" render={() => "Isso mesmo."} />

      </div>
    )
  }


export default App;