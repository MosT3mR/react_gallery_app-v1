import React from 'react'
import Photo from './Photo'
import NoPhoto from './NoPhoto'

const PhotoContainer = () => {
 return (
  <div className="photo-container">
   <h2>Results</h2>
   <ul>
    <Photo />
    <NoPhoto />
   </ul>
  </div>
 )
}

export default PhotoContainer
