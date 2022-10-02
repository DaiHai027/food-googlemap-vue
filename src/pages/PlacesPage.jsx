import { collection, orderBy, query, where } from 'firebase/firestore'
import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { db } from '../firebase'
// hooks
import useGetPlaces from '../hooks/useGetPlaces'
import useAdmin from '../hooks/useAdmin'
// context
import { useAuthContext } from '../contexts/AuthContext'
// components
import FoodPlacesList from '../components/FoodPlacesList'
// loader
import BeatLoader from 'react-spinners/BeatLoader'
// bootstrap
import Container from 'react-bootstrap/Container'
import { ListGroup } from "react-bootstrap" 

const PlacesPage = () => {
  const { data: foodPlaces, loading } = useGetPlaces()
  const { currentUser } = useAuthContext()
  const id = currentUser.uid
  const { isAdmin } = useAdmin(id) 

  return (
    <Container className="py-3">
      <h1 className="h-text-color-dark">Restaurants</h1>
      {loading && <BeatLoader  color='#F27166' /> }
      
      {!loading && 
        <>
          {isAdmin && (
            <>    
              <ListGroup className="foodplace-listgroup">      
                <FoodPlacesList foodPlaces={foodPlaces}  />       
              </ListGroup>                                  
            </>
          )}
        </>
      }
        
    </Container>
    
  )
}

export default PlacesPage