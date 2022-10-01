import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import useDeleteTip from '../hooks/useDeleteTip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
    

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
                  <Button variant="danger" onClick={() => deleteTip.mutate(tip)}><FontAwesomeIcon icon={faTrashAlt}/></Button>
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