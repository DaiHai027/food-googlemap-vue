import Container from 'react-bootstrap/Container'
import { collection, orderBy, query, where } from 'firebase/firestore'
import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { db } from '../firebase'
import FoodPlacesList from '../components/FoodPlacesList'
import useGetPlaces from '../hooks/useGetPlaces'

const PlacesPage = () => {

    const { data: foodPlaces, loading: isLoadingPlaces } = useGetPlaces()

  return (
    <Container>
        <div>
            List of Places
        </div>

        <FoodPlacesList foodPlaces={foodPlaces} isLoadingPlaces={isLoadingPlaces} />
    </Container>
    
  )
}

export default PlacesPage