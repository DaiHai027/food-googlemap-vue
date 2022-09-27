import { Link, NavLink } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext"
// bootstrap
import Container  from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'

const Navigation = () => {
    const { currentUser, userName, userEmail, userPhotoUrl} = useAuthContext()
    console.log('user', userPhotoUrl, userName)

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
                    {
                        currentUser? (
                            <>
                                {/* User is logged in */}
                                <Nav.Link as={NavLink} end to="/addPlaces">Add a new Places</Nav.Link>

                                <NavDropdown title={
                                    userPhotoUrl
                                    ? <Image
                                        src={userPhotoUrl}
                                        height={30}
                                        width={30}
                                        fluid
                                        roundedCircle
                                        />
                                    : userName || userEmail
                                }>
                                    <NavLink to="/update-profile"
                                    className="dropdown-item">Update Profile</NavLink>
                                    <NavDropdown.Divider />

                                    <NavLink to="/users"
                                    className="dropdown-item">Edit Users</NavLink>

                                    <NavLink to="/logout"
                                    className="dropdown-item">Log Out</NavLink>
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