import React, { Component } from 'react';

// Config.js
import apiKey from './config'

// Importing App Components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      photos: [],
      loading: true
    }
  }

  componentDidMount(){
    this.photoSearch()
  }

  photoSearch = (query = 'cats') => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(res => res.json())
    .then((data) => {this.setState({photos: data.photos.photo})})
  }

  render() {
    console.log(this.state.photos)
    return (
      <div className="container">
        <SearchForm onSearch={this.photoSearch} />
        <Nav />
        <PhotoContainer photos={this.state.photos} />
      </div>
    )
  }
}