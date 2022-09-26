// context
import { useAuthContext } from '../contexts/AuthContext'
// hooks
import useUser from '../hooks/useUser'

const useAdmin = (id) => {
  
  console.log('currentuser id', id)
  const { data, loading } = useUser(id)
  
  const isAdmin = data.admin

  console.log('data', data)
  console.log('admin', isAdmin)
  return {
    isAdmin
  }
}

export default useAdmin