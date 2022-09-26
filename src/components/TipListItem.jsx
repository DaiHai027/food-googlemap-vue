import ListGroup from 'react-bootstrap/ListGroup'


const TipListItem = ({ tip }) => {
  return (
    <ListGroup.Item>
        <p>{tip.name}</p>
        <p>{tip.adress}</p>
        <p>{tip.town}</p>
        <p>{tip.cuisine}</p>
        <p>{tip.type}</p>
        <p>{tip.supply}</p>
        <p>{tip.email}</p>
        <p>{tip.website}</p>
        <p>{tip.phonenumber}</p>
        <p>{tip.instagram}</p>
        <p>{tip.description}</p>
    </ListGroup.Item>
       
  )
}

export default TipListItem