import Container from 'react-bootstrap/Container'
import CreatePlaceForm from '../components/CreatePlaceForm'
import { useAuthContext } from '../contexts/AuthContext'
import { collection, orderBy, query, where } from 'firebase/firestore'
import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { db } from '../firebase'

const AddPlacePage = () => {
  const { currentUser } = useAuthContext()

  // const queryRef = query(
  //   collection(db,'places'),
  //   orderBy('name')
  // )
  // const { data: place, isLoading } = useFirestoreQueryData(['places',], queryRef,{
  //     idField: 'id',
  //     subscribe: true,
  // })
  // console.log('place', place)

  return (
    <Container className="py-3">
            <h1 className='h-text-color-dark'>Add a new place</h1>
       

            <CreatePlaceForm />

    </Container>
  )
}

export default AddPlacePage
