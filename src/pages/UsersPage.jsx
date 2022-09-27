// context
import { useAuthContext } from '../contexts/AuthContext'
// hooks
import useAdmin from '../hooks/useAdmin'
// components
import UsersList from '../components/UsersList'


const UsersPage = () => {
  const { currentUser } = useAuthContext()
  const id = currentUser.uid
  const { loading, isAdmin } = useAdmin(id) 


  return (
    <>
      <div>UsersPage</div>
      {/* test switching between general users and admins */}
      
      {loading && <p>loaging...</p>}
      
      {isAdmin ? <UsersList /> : <p>You do not have permission to edit. Please contact the administrator.</p>}

    </>
  )
}

export default UsersPage