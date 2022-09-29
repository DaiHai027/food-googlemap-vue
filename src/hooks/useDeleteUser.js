import { useState } from 'react'
import { doc, deleteDoc } from 'firebase/firestore'
import { ref, deleteObject } from 'firebase/storage'
import { deleteUser } from 'firebase/auth'
import { db, storage, auth } from '../firebase'

const useDeleteUser = () => {
    const [isError, setIsError] = useState(false)
	const [error, setError] = useState(null)
	const [isMutating, setIsMutating] = useState(false)

    const mutate = async (user) => {
        setError(null)
		setIsError(false)
		setIsMutating(true)

        // delete user from authentication, strage and db
        try {
            // get ref to users photo in storage
            const storageRef = ref(storage, user.email)
            console.log('storage ref', storageRef)
            console.log('delete user', user)

            // delete user from authentication
            // await deleteUser(user).then(() => {
            //     console.log('User deleted')
            // }).catch((err) => {
            //     console.log('An error ocurred', err)
            // })

            

        } catch (err) {
            setIsError(true)
            setError(err)
        } finally {
            setIsMutating(false)
        }
    }

  return {
    error,
    isError,
    isMutating,
    mutate,
  }
}

export default useDeleteUser
