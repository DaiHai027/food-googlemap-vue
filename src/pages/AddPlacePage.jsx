import Container from 'react-bootstrap/Container'
import CreatePlaceForm from '../components/CreatePlaceForm'
import { useAuthContext } from '../contexts/AuthContext'
import { collection, orderBy, query, where } from 'firebase/firestore'
import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { db } from '../firebase'

const AddPlacePage = () => {
  const { currentUser } = useAuthContext()

  const queryRef = query(
    collection(db,'place'),
    where('admin', '==', true),
    orderBy('name')
  )
  const { data: place, isLoading } = useFirestoreQueryData(['place',], queryRef,{
      idField: 'id',
      subscribe: true,
  })

  return (
    <Container className="py-3">

        <div className="d-flex justify-content-between align-items-start mb-3">
            <h1 className='h-text-color-dark'>Add a new place</h1>
        </div>

            <CreatePlaceForm />

    </Container>
  )
}

export default AddPlacePage
