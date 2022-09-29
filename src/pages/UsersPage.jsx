// context
import { useAuthContext } from '../contexts/AuthContext'
// hooks
import useAdmin from '../hooks/useAdmin'
import useUsers from '../hooks/useUsers'
// components
import UsersList from '../components/UsersList'
// loader
import BeatLoader from 'react-spinners/BeatLoader'


const UsersPage = () => {
  const{ data: users, loading } = useUsers()
  const { currentUser } = useAuthContext()
  const id = currentUser.uid
  const { isAdmin } = useAdmin(id) 


  return (
    <>
      <h1 className="h-text-color-dark">Edit Users</h1>
      {/* test switching between general users and admins */}
      {loading && <BeatLoader  color='#F27166' /> }
      
      {!loading && 
        <>
          {isAdmin 
            ? <UsersList users={users}/> 
            : <p>You do not have permission to edit. Please contact the administrator.</p>
          }
        </>
      }
      

    </>
  )
}

export default UsersPage