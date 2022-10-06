// bootstrap
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'

const UsersListItem = ({ users }) => {

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
            </ListGroup.Item>
        ))}

    </>
  )
}

export default UsersListItem