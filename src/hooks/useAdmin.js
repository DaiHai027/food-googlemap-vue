// hooks
import useUser from '../hooks/useUser'

import { useAuthContext } from '../contexts/AuthContext'

const useAdmin = (id) => {
  
  console.log('currentuser id', id)
  const { data, loading } = useUser(id)
  const { currentUser } = useAuthContext() 

  let isAdmin = false

  console.log('data', data)
  console.log('admin', isAdmin)

  if (id == undefined) {
    isAdmin = false
    console.log('logout user check isAdmin', isAdmin)
    return
  } 
  isAdmin = data.admin

  return {
    isAdmin,
    loading,
  }
}

export default useAdmin