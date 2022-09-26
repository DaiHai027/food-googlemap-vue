import React from 'react'
import ListGroup  from 'react-bootstrap/ListGroup'
import PlaceListItem from './PlaceListItem'

const PlaceList = ({ places }) => {
  return (
    <ListGroup>
        {places.map(place => (
            <PlaceListItem place={place} key={place.id} />
        ))}
    </ListGroup>
  )
}

export default PlaceList