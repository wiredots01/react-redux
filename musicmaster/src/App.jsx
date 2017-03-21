import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import './App.css';
import Profile from './Profile';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  search() {
    const { query } = this.state;
    console.log('query', query);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    let FETCH_URL = `${BASE_URL}q=${query}&type=artist&limit=1`;
    const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
    console.log('fetch',FETCH_URL);
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0]
      this.setState({artist})
      FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US`;
      fetch(FETCH_URL, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => {
        const { tracks } = json;
        this.setState({tracks});
      })
    })
  }

  render() {
    const { query, artist, tracks } = this.state
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup >
            <FormControl
              type="text"
              value={query}
              onChange={event => { this.setState({query: event.target.value})} }
              onKeyPress={event => {
                if(event.key === 'Enter'){
                  this.search();
                }
              }}
              placeholder="Search for an Artist" />
            <InputGroup.Addon onClick={() => this.search()} >
              <Glyphicon glyph="search" />
            </InputGroup.Addon>

          </InputGroup>
        </FormGroup>
        { artist &&
          <div>
            <Profile artist={artist} />
            <Gallery tracks={tracks} />

          </div>
        }

      </div>
    )
  }
}

export default App;
