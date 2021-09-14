import React, { Component } from 'react'
import { withRouter } from "react-router";
import Photo from './Photo'
import NoPhoto from './NoPhoto'

class PhotoContainer extends Component {
 componentDidMount(){
  // holllyyyy .... i know how to get the pramas in arrow functions , but finding how to do it in class's !! the more you know Othman
  const query = this.props.match.params.topic;
  if(query){
   this.props.photoSearch(query)
  }
 }

 render(){

  // making sure that the history works
  if(this.props.match.params.topic !== this.props.lastQuery){
   this.props.photoSearch(this.props.match.params.topic)
  }

  // making some loginc for when there is no results 
  let showPhoto
  
  if(this.props.photos.length > 0){
   showPhoto = this.props.photos.map(photo => <Photo key={photo.id} photo={photo} />)
  } else {
   showPhoto = <NoPhoto />
  }
 
  return (
   <div className="photo-container">
    <h2>{this.props.match.params.topic} Results</h2>
    <ul>
     {showPhoto}
    </ul>
   </div>
  )
 }
}

export default withRouter(PhotoContainer)
