// context
import { useAuthContext } from '../contexts/AuthContext'
// hooks
import useAdmin from '../hooks/useAdmin'
import useUsers from '../hooks/useUsers'
// components
import UsersList from '../components/UsersList'


const UsersPage = () => {
  const{ data: users, loading } = useUsers()
  const { currentUser } = useAuthContext()
  const id = currentUser.uid
  const { isAdmin } = useAdmin(id) 


  return (
    <>
      <div>UsersPage</div>
      {/* test switching between general users and admins */}
      
      {loading && <p>loaging...</p>}
      
      {isAdmin ? <UsersList users={users}/> : <p>You do not have permission to edit. Please contact the administrator.</p>}

    </>
  )
}

export default UsersPage