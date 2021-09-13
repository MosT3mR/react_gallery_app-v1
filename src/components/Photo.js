import React from 'react'

const Photo = ({photo}) => {
 return (
      <li>
      <img alt={photo.title} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
    </li>
     )
}

export default Photo