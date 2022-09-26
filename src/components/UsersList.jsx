// bootstrap
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
//hooks
import useUsers from '../hooks/useUsers'
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

const UsersList = () => {
    const{ data: users, loading } = useUsers()
    console.log('users', users)
  return (
    <Container>
        {!loading &&
            <ListGroup>
                {users && users.map(user => (
                    <ListGroupItem key={user.id}>
                        {user.admin ? 'admin' : ''}
                        <p>USER NAME: {user.name}</p>
                        <p>E-MAIL: {user.email}</p>
                        <div>
                          {/* Icon tras & edit */}
                          <Button>
                            <FontAwesomeIcon icon={faEdit}/>
                          </Button>
                          <Button>                                                     
                            <FontAwesomeIcon icon={faTrashAlt}/>
                          </Button>
                        </div>
                    </ListGroupItem>
                ))} 
            </ListGroup>
        }
    </Container>
  )
}

export default UsersList