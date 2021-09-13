import React from 'react'
import Photo from './Photo'
import NoPhoto from './NoPhoto'

const PhotoContainer = ({photos}) => {
 let showPhoto

 if(photos.length > 0){
  showPhoto = photos.map(photo => <Photo key={photo.id} photo={photo} />)
 } else {
  showPhoto = <NoPhoto />
 }

 return (
  <div className="photo-container">
   <h2>Results</h2>
   <ul>
    {showPhoto}
   </ul>
  </div>
 )
}

export default PhotoContainer
