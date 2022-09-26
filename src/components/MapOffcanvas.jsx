import { useState } from 'react'
import  Offcanvas  from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import PlaceList from './PlaceList'
import { collection, orderBy, query, where } from 'firebase/firestore' 
import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { db } from '../firebase'


const MapOffcanvas = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const queryRef = query(
        collection(db, 'places'),
        // where('town', '=='  userPosition
        // ),
        orderBy('title')
        )
        const { data: places, isLoading } = useFirestoreQueryData(['places'], queryRef, {
            idField: 'id',
            subscribe: true,
        })
  return (
    <>
        <Button variant="info" onClick={handleShow} className="me-2">
            Places near you
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>

                <Offcanvas.Title>Places near you</Offcanvas.Title>

            </Offcanvas.Header>
            <Offcanvas.Body>

                {isLoading && (<p>Loading data...</p>)}

                {!isLoading && <PlaceList places={places} />}

            </Offcanvas.Body>
        </Offcanvas>
    
    </>
  )
}

export default MapOffcanvas