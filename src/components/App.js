import React, { Component } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

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
      cats: [],
      dogs: [],
      computer:[],
      lastQuery: ''
    }
  }

  // Storing the 3 pages in states
  componentDidMount(){
    this.defultPhotos('cats')
    this.defultPhotos('dogs')
    this.defultPhotos('computer')
  }

  photoSearch = (query) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(res => res.json())
    .then((data) => {this.setState({photos: data.photos.photo,lastQuery: query})})
  }


  defultPhotos = (query) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(res => res.json())
    .then((data) => {
      if(query === 'cats'){
        this.setState({
          cats: data.photos.photo
        })
      }
      if(query === 'dogs'){
        this.setState({
          dogs: data.photos.photo
        })
      }
      if(query === 'computer'){
        this.setState({
          computer: data.photos.photo
        })
      }
    })
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.photoSearch} />
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/cats" />} />
            <Route exact path={`/search/:topic`} render={ () =>
             <PhotoContainer photoSearch={this.photoSearch}
              photos={this.state.photos} lastQuery={this.state.lastQuery} />}
             />
            <Route exact path="/cats" render={ () =>
             <PhotoContainer photoSearch={this.photoSearch}
              photos={this.state.cats} />}
             />
            <Route exact path="/dogs" render={ () =>
             <PhotoContainer photoSearch={this.photoSearch}
              photos={this.state.dogs} />}
             />
            <Route exact path="/computer" render={ () =>
             <PhotoContainer photoSearch={this.photoSearch}
              photos={this.state.computer} />}
             />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}