// hooks
import useUser from '../hooks/useUser'

//import { useAuthContext } from '../contexts/AuthContext'

const useAdmin = (id) => {
  
  console.log('currentuser id', id)
  const { data, loading } = useUser(id)
  //const { currentUser } = useAuthContext() 

  let isAdmin = data.admin


  return {
    isAdmin,
    loading,
  }
}

export default useAdmin