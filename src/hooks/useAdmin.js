// hooks
import useUser from '../hooks/useUser'

/**
 * Den här Hook fungerar bara när användaren/admin är inloggad.
 */
const useAdmin = (id) => {
  
  console.log('currentuser id', id)
  const { data, loading } = useUser(id)

  let isAdmin = data.admin


  return {
    isAdmin,
    loading,
  }
}

export default useAdmin