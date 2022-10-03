import { Link, NavLink } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"
import { useEffect, useState } from "react"
// bootstrap
import Container  from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'

const Navigation = () => {
    const [data, setData] = useState([])
    const { currentUser, userName, userEmail, userPhotoUrl} = useAuthContext()
    

    useEffect(() => {       
        if (currentUser) {            
            const ref = doc(db, 'users', currentUser.uid)
            const unsubscribe = onSnapshot(ref, (snapshot) => {
                setData({
                    id: snapshot.id,
                    ...snapshot.data(),
                })
            })
            return unsubscribe
        } 
        return
    },[currentUser])

    console.log('data', data)


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
                                    
                                    <NavLink to="/update-profile" className="dropdown-item">Update Profile</NavLink>
                                    <NavDropdown.Divider />
                                    
                                   {data.admin &&
                                        (
                                            <>
                                                <NavLink to="/users" className="dropdown-item">Edit Users</NavLink>
                                                <NavLink to="/add-places" className="dropdown-item">Add a new Places</NavLink>
                                                <NavLink to="/places" className="dropdown-item">List of Places</NavLink>
                                                <NavLink to="/tips" className="dropdown-item">List of Suggestions</NavLink>
                                                <NavDropdown.Divider />
                                            </>
                                        )
                                    }
                                    
                                    

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