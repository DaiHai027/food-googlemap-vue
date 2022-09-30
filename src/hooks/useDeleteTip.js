import { useState } from 'react'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'

const useDeleteTip = () => {
    const [isError, setIsError] = useState(false)
	const [error, setError] = useState(null)
	const [isMutating, setIsMutating] = useState(false)

    const mutate = async (tip) => {
		setError(null)
		setIsError(false)
		setIsMutating(true)

		// run mutation that will delete image from storage and db
		try {
			
			// get ref to image in db
			const dbRef = doc(db, 'tip', tip.id)

			// delete image from db
			await deleteDoc(dbRef)

		} catch (e) {
			setIsError(true)
			setError(e)
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

export default useDeleteTip