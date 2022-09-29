// conponent
import UsersListItem from './UserListItem'
// bootstrap
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const UsersList = ({ users }) => {
    
   
  return (
    <Container>
      
            <ListGroup className='user-list'>
               <UsersListItem users={users}/>
            </ListGroup>
      
    </Container>
  )
}

export default UsersList