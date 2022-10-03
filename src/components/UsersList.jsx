// conponent
import UsersListItem from './UserListItem'
// bootstrap
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

const UsersList = ({ users }) => {
    
   
  return (
    <>
      
            <ListGroup className='user-list'>
               <UsersListItem users={users}/>
            </ListGroup>
      
    </>
  )
}

export default UsersList