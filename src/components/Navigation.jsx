import { Link, NavLink } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext"
import { useEffect, useState } from "react"
// hooks
import useAdmin from '../hooks/useAdmin'
import useUser from '../hooks/useUser'
// bootstrap
import Container  from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'


const Navigation = () => {
    const [admin, setAdmin] = useState(false)
    const [id, setId] = useState(null)
    const { currentUser, userName, userEmail, userPhotoUrl} = useAuthContext() 
    //const id = currentUser.uid
    const { data, loading } = useUser(id)
    const { isAdmin } = useAdmin(id) 

    useEffect(() => {
        if (currentUser == null) {
            setId(undefined)
            setAdmin(false)
        }
        console.log('data.admin', data.admin)
        setAdmin(data.admin)

    },[id])
    console.log('isAdmin', isAdmin)
    console.log('admin', admin )


  return (
    <Navbar className="navbar" expand="md">
        <Container>
            <Navbar.Brand as={Link} to="/">
                <img
                    src="/src/assets/icons/map.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="react Bootstrap logo"
                />{' '}
                <span className="navbar-logo">Place</span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto align-items-center">
                    {currentUser ? (
                            <>                                         
                                <NavDropdown align={'end'}
                                    title={
                                        userPhotoUrl
                                        ? <Image
                                            className="photo-placeholder"
                                            src={userPhotoUrl}
                                            height={30}
                                            width={30}
                                            fluid
                                            roundedCircle
                                            />
                                        : userName || userEmail
                                    }>

                                    <NavLink to="/update-profile" className="dropdown-item">
                                        Update Profile
                                    </NavLink>
                                    <NavDropdown.Divider />

                                    {/* admin only */}
                                     
                                    <NavLink to="/users" className="dropdown-item">
                                        Edit Users
                                    </NavLink>
                                                                            
                                    <NavLink to="/addPlaces" className="dropdown-item">
                                        Add a new Places
                                    </NavLink>

                                    <NavLink to="/places" className="dropdown-item">
                                        List of Places
                                    </NavLink>

                                    <NavDropdown.Divider />

                                    {/* logout */}

                                    <NavLink to="/logout" className="dropdown-item">Log Out</NavLink>
                                </NavDropdown>
                            </>
                        ) : (
                            <>
                                {/* No user is logged in */}
                                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                                <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
                            </>
                        )
                    }
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation