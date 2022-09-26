// context
import { useAuthContext } from '../contexts/AuthContext'
// hooks
import useUser from '../hooks/useUser'
import useAdmin from '../hooks/useAdmin'

const UsersPage = () => {
  const { currentUser } = useAuthContext()
  const id = currentUser.uid
  const { isAdmin } = useAdmin(id) 

  return (
    <>
      <div>UsersPage</div>
      {/* test switching between general users and admins */}
      {isAdmin ? <p>admin</p> : <p>general user</p>}

    </>
  )
}

export default UsersPage