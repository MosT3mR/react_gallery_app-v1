import React, { Component } from 'react';

// Importing App Components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchForm />
        <Nav />
        <PhotoContainer />
      </div>
    )
  }
}