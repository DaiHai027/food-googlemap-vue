import React from 'react'
import { ListGroup } from 'react-bootstrap'

const TipList = ({ tips }) => {
  return (
    <ListGroup>
        {tips.map(tip => (
            <TipListItem tip={tip} key={tip.id} />
        ))}
    </ListGroup>
  )
}

export default TipList