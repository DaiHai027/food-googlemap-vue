import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import useDeleteTip from '../hooks/useDeleteTip'
    

const TipsList = ({tips, isLoadingTips}) => {
    const deleteTip = useDeleteTip()


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
                  <Button variant="danger" onClick={() => deleteTip.mutate(tip)}>Delete</Button>
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