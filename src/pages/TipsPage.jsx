import Container from 'react-bootstrap/Container'
import { collection, orderBy, query, where } from 'firebase/firestore'
import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { db } from '../firebase'
import { useAuthContext } from '../contexts/AuthContext'

const TipsPage = () => {
    const { currentUser } = useAuthContext()

    const queryRef = query(
      collection(db, 'tips'),
      orderBy('title')
    )
    const { data: tips, isLoading } = useFirestoreQueryData(['tips'], queryRef,{

    })
    
  return (
    
      <Container className="py-3">

        <div className="d-fex justify-content-between align-items-start mb-3">
                Tips from users!
        </div>

        {isLoading && (<p>Loading data ...</p>)}

        {!isLoading && <TipList tips={tips} />}
      </Container>
  )
}

export default TipsPage