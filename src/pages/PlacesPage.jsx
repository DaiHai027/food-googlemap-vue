import { Link } from 'react-router-dom'
import { useMemo } from 'react'
// hooks
import useGetPlaces from '../hooks/useGetPlaces'
import useAdmin from '../hooks/useAdmin'
// context
import { useAuthContext } from '../contexts/AuthContext'
// components
import FoodPlacesList from '../components/FoodPlacesList'
// bootstrap
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'
import { ListGroup } from "react-bootstrap" 
// loader
import BeatLoader from 'react-spinners/BeatLoader'




const PlacesPage = () => {
  const { data: foodPlaces, loading } = useGetPlaces()
  const { currentUser } = useAuthContext()
  const id = currentUser.uid
  const { isAdmin } = useAdmin(id)

  const columns = useMemo( () => {

    return [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Address',
            accessor: 'adress'
        },
        {
            Header: 'Town',
            accessor: 'town'
        },
        {
            Header: 'Supply',
            accessor: 'supply'
        },
        {
            Header: 'Type',
            accessor: 'type'
        },
        {
            Header: 'Cuisine',
            accessor: 'cuisine'
        },
        {
            Header: 'Actions',
            Cell: ({ row: { original: foodplace } }) => (
                <Button
                  variant="primary"
                  size="sm"
                  as={Link}
                  to={`/places/${foodplace.id}`}
                >
                  Goto
                </Button>
            )
        },
    ]

}, [] )

  return (
    <Container className="py-3">

      <h1 className="h-text-color-dark">Restaurants</h1>
      {loading && <BeatLoader  color='#F27166' /> }
      
      {!loading && 
        <>
          {isAdmin && (
            <>    
              <ListGroup className="foodplace-listgroup">
                {!loading && foodPlaces &&  
                foodPlaces.map(foodplace => (      
                  <FoodPlacesList foodPlaces={foodplace} key={foodplace.id} /> 
                ))}      
              </ListGroup>                                  
            </>
          )}
        </>
      }
        

    </Container>

  )
}

export default PlacesPage