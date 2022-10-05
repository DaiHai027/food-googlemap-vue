// context
import { useAuthContext } from '../contexts/AuthContext'
// bootstrap
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
// icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faEdit} from '@fortawesome/free-solid-svg-icons'



const UsersListItem = ({ users }) => { 
    const { currentUser } = useAuthContext()

   
  return (
    <>                 
        {users && users.map(user => (
            <ListGroup.Item 
                key={user.id}
                className='user-list-item'
            >
                
                <Image 
                    className='user-image'
                    src={user.photoURL}
                    fluid
                    roundedCircle
                    height={'80'}
                    width={'80'}
                />

                <div className='user-info'>
                   
                    <p>
                        <span className='pr-3'>USER NAME: {user.name}</span>  
                        {user.admin ? <span className='admin'>  * admin *  </span> : ''}
                    </p>
                    <p>E-MAIL: {user.email}</p>
                </div>
                
                <div className='user-edit-btn'>
                  
                    {/* Switch admin / user */}
                    {/* *VG-nivåkrav*.
                        Knapp för växling mellan administratör/allmän användare.
                        Inaktiverad endast för ursprungliga administratörer? 
                    */}
                    
                    {/* <Form>
                        {currentUser.uid !== user.id &&
                            <Form.Check 
                                type="switch"
                                id="custom-switch"
                                label="admin"                             
                            />
                        }
                    </Form>                    */}
                </div>
            </ListGroup.Item>
        ))} 
             
    </>
  )
}

export default UsersListItem