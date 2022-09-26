import ListGroup from 'react-bootstrap/ListGroup'

const PlaceListItem = ({ place }) => {
  return (
    <ListGroup.Item>
        <p>{place.name}</p>
        <p>{place.adress}</p>
        <p>{place.town}</p>
        <p>{place.cuisine}</p>
        <p>{place.type}</p>
        <p>{place.supply}</p>
        <p>{place.email}</p>
        <p>{place.website}</p>
        <p>{place.phonenumber}</p>
        <p>{place.instagram}</p>
        <p>{place.description}</p>
    </ListGroup.Item>
  )
}

export default PlaceListItem