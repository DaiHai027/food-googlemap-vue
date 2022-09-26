import { useRef, useState } from 'react'
// contexts
import { useAuthContext } from '../contexts/AuthContext'
// bootstrap
import { Container, Row, Col, Form, Button, Card, Alert, Image } from 'react-bootstrap'


const UpdateProfilePage = () => {
	const displayNameRef = useRef()
	const emailRef = useRef()
	// const photoRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const [photo, setPhoto] = useState(null)
	const [message, setMessage] = useState(null)
	//const [isAdmin, setIsAdmin] = useState(null)
	const {
		currentUser,
		reloadUser,
		setDisplayNameAndPhoto,
		setEmail,
		setPassword,
	} = useAuthContext()
	


	console.log('current user', currentUser)
	
	const handleFileChange = (e) => {
		if (!e.target.files.length) {
			setPhoto(null)
			return
		}

		setPhoto(e.target.files[0])
		console.log("File changed!", e.target.files[0])
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("The passwords does not match")
		}

		setError(null);
		setMessage(null);

		// update user profile
		try {
			// disable update-button while updating is in progress
			setLoading(true)

			// update displayName *ONLY* if it has changed
			if (
				displayNameRef.current.value !== currentUser.displayName
				|| photo
			) {
				await setDisplayNameAndPhoto(displayNameRef.current.value, photo)
			}

			// update email *ONLY* if it has changed
			if (emailRef.current.value !== currentUser.email) {
				await setEmail(emailRef.current.value)
			}

			// update password *ONLY* if the user has provided a new password to set
			if (passwordRef.current.value) {
				await setPassword(passwordRef.current.value)
			}

			// reload user
			await reloadUser()

			setMessage("Profile successfully updated")
			setLoading(false)

		} catch (e) {
			console.log("Error updating profile", e)
			setError(e.message)
			setLoading(false)
		}
	}

	return (
		<Container className="py-3 center-y">
			{}
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card>
						<Card.Header as="h5">Update Profile</Card.Header>
						<Card.Body>
							{error && (<Alert variant="danger">{error}</Alert>)}
							{message && (<Alert variant="success">{message}</Alert>)}

							<Form onSubmit={handleSubmit}>
								
								<div className="d-flex justify-content-center my-3">
									<Image
										src={currentUser.photoURL || 'https://via.placeholder.com/225'}
										fluid
										roundedCircle
									/>
								</div>

								<Form.Group id="displayName" className="mb-3">
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" ref={displayNameRef} defaultValue={currentUser.displayName} />
								</Form.Group>

								<Form.Group id="photo" className="mb-3">
									<Form.Label>Photo</Form.Label>
									<Form.Control type="file" onChange={handleFileChange} />
									<Form.Text>
										{
											photo
												? `${photo.name} (${Math.round(photo.size/1024)} kB)`
												: 'No photo selected'
										}
									</Form.Text>
								</Form.Group>

								<Form.Group id="email" className="mb-3">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" ref={emailRef} defaultValue={currentUser.email} required />
								</Form.Group>

								<Form.Group id="password" className="mb-3">
									<Form.Label>New Password</Form.Label>
									<Form.Control type="password" ref={passwordRef} autoComplete="new-password" />
								</Form.Group>

								<Form.Group id="password-confirm" className="mb-3">
									<Form.Label>Confirm New Password</Form.Label>
									<Form.Control type="password" ref={passwordConfirmRef} autoComplete="new-password" />
								</Form.Group>

								<Button disabled={loading} type="submit">Update</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default UpdateProfilePage
