import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const TipsList = ({tips, isLoadingTips}) => {
  return (
        <>
      {
        isLoadingTips && (
          <p>Loading ...</p>
        )
      }
      {
        tips && (
          <ListGroup>
            {
              tips.map((tip, index) => (
                <ListGroup.Item action key={index}>
                  <h3>{tip.email}</h3>
                  <p>{tip.tip}</p>
                  <Button></Button>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        )
      }
      </>
  )
}

export default TipsList