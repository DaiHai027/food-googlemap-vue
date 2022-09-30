import Container from 'react-bootstrap/Container'
import CreatePlaceForm from '../components/CreatePlaceForm'
import { useAuthContext } from '../contexts/AuthContext'
// hooks
import useAdmin from '../hooks/useAdmin'
import useUsers from '../hooks/useUsers'
// loader
import BeatLoader from 'react-spinners/BeatLoader'
// import { collection, orderBy, query, where } from 'firebase/firestore'
// import { useFirestoreQueryData } from '@react-query-firebase/firestore'
// import { db } from '../firebase'

const AddPlacePage = () => {
  const{ data: users, loading } = useUsers()
  const { currentUser } = useAuthContext()
  const id = currentUser.uid
  const { isAdmin } = useAdmin(id) 


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

            {loading && <BeatLoader  color='#F27166' /> }
      
      {!loading && 
        <>
          {/* switching between general users and admins */}
          {isAdmin 
            ? <CreatePlaceForm />
            : <p>You do not have permission to edit. Please contact the administrator.</p>
          }      
        </>
      }    
    </Container>
  )
}

export default AddPlacePage
