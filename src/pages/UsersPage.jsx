// context
import { useAuthContext } from '../contexts/AuthContext'
// hooks
import useAdmin from '../hooks/useAdmin'
import useUsers from '../hooks/useUsers'
// components
import UsersList from '../components/UsersList'
// loader
import BeatLoader from 'react-spinners/BeatLoader'
// bootstrap
import Container from 'react-bootstrap/Container'


const UsersPage = () => {
  const{ data: users, loading } = useUsers()
  const { currentUser } = useAuthContext()
  const id = currentUser.uid
  const { isAdmin } = useAdmin(id) 


  return (
    <Container className="py-3">
      <h1 className="h-text-color-dark">All Users</h1>
      {loading && <BeatLoader  color='#F27166' /> }
      
      {!loading && 
        <>
          {isAdmin &&
            <UsersList users={users}/> 
          }
        </>
      }
      

    </Container>
  )
}

export default UsersPage