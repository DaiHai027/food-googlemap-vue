// conponent
import UsersListItem from './UserListItem'
// bootstrap
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

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