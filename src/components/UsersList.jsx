// conponent
import UsersListItem from './UserListItem'
// bootstrap
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