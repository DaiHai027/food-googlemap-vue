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
    
    console.log('users', users)
  return (
    <Container>
      
            <ListGroup className='user-list'>
                {users && users.map(user => (
                    <ListGroup.Item 
                      key={user.id}
                      className='user-list-item'
                    >
                        
                        <Image 
                          className='user-image'
                          src={user.photoURL}
                          height={50}
                          width={50}
                          fluid
                          roundedCircle
                        />

                        <div className='user-info'>
                          {user.admin ? <p>admin</p> : ''}
                          <p>USER NAME: {user.name}</p>
                          <p>E-MAIL: {user.email}</p>
                        </div>
                        
                        <div className='user-edit-btn'>
                          {/* Icon tras & edit */}
                          <Button className='user-btn'>
                            <FontAwesomeIcon icon={faEdit}/>
                          </Button>
                          <Button className='user-btn'>                                                   
                            <FontAwesomeIcon icon={faTrashAlt}/>
                          </Button>
                        </div>
                    </ListGroup.Item>
                ))} 
            </ListGroup>
      
    </Container>
  )
}

export default UsersList