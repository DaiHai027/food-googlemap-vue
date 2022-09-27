import { useState, useMemo } from 'react'
import  Offcanvas  from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import  ListGroup  from 'react-bootstrap/ListGroup'
import { collection, orderBy, query, where } from 'firebase/firestore'
import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { db } from '../firebase'
import FoodPlacesTable from './FoodPlacesTable'

const MapOffcanvas = ({foodPlaces, onFoodItemClick, isLoadingPlaces}) => {

    const columns = useMemo( () => {

        return [
            {
                Header: 'Name',
                accessor: 'name'
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
            }
        ]

    }, [] )

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

     const queryRef = query(
         collection(db, 'places'),
        // where('town', '=='  userPosition
         // ),
         orderBy('name')
         )

  return (
    <>

        <Button  onClick={handleShow} className="me-2 btn-color">
            Places near you
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>

                <Offcanvas.Title>Places near you</Offcanvas.Title>

            </Offcanvas.Header>
            <Offcanvas.Body>
            {isLoadingPlaces && (
            <p>Loading ....</p>
        )}
            {
                foodPlaces && (
                    <>
                    <FoodPlacesTable foodPlaces={foodPlaces} onFoodItemClick={onFoodItemClick} columns={columns} />
                    <ListGroup className="foodplace-listgroup">
                        {
                            foodPlaces.map((foodplace, index) => (
                                <ListGroup.Item action key={index} onClick={() => {onFoodItemClick(foodplace)}}>
                                    <h3>{foodplace.name}</h3>
                                    <span>{foodplace.adress + ' ' + foodplace.town}</span>
                                    <br />
                                    <span>{foodplace.supply} | {foodplace.type}</span>
                                    <div className="foodplace-contact">
                                        {foodplace.phonenumber && (
                                            <a href={`tel:${foodplace.phonenumber}`}>{foodplace.phonenumber}</a>
                                        )}
                                        <br />
                                        {foodplace.email && (
                                            <a href={`mailto:${foodplace.email}`}>{foodplace.email}</a>
                                        )}
                                    </div>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                    </>
                )
            }


            </Offcanvas.Body>
        </Offcanvas>

    </>
  )
}

export default MapOffcanvas