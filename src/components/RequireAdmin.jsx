import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'
import useUser from '../hooks/useUser'
// loader
import BeatLoader from 'react-spinners/BeatLoader'

const RequireAuth = ({
	children,
	redirectTo = "/",
}) => {
	const { currentUser } = useAuthContext()
	const { data, loading } = useUser(currentUser?.uid)

	useEffect(()=>{
	}, [])

	return (
		<>
			{
				loading
				? <BeatLoader  color='#F27166' />
				: data.admin
					? children
					: <Navigate to={redirectTo} />
			}

		</>

	)
}

export default RequireAuth
