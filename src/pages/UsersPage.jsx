import { useParams } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { db } from '../firebase'
// context
import { useAuthContext } from '../contexts/AuthContext'
// hooks
import useUser from '../hooks/useUser'

const UsersPage = () => {
  const { currentUser } = useAuthContext()
  const id = currentUser.uid
  
  console.log('currentuser id', id)
  const { data, loading } = useUser(id)
  
  const isAdmin = data.admin

  console.log('data', data)
  console.log('admin', isAdmin)
  return (
    <>
      <div>UsersPage</div>
      {/* test switching between general users and admins */}
      {isAdmin ? <p>admin</p> : <p>general user</p>}

    </>
  )
}

export default UsersPage