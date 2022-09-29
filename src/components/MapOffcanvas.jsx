import { useState, useMemo } from 'react'
import  Offcanvas  from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import  ListGroup  from 'react-bootstrap/ListGroup'
import FoodPlacesTable from './FoodPlacesTable'
import useGetQueryPlaces from '../hooks/useGetQueryPlaces'

const MapOffcanvas = ({onFoodItemClick}) => {

    // What columns table should include
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

    // States for how food places list should be filtered
    const [nameOrder, setNameOrder] = useState('asc')
    const [supplyWhere, setSupplyWhere] = useState('All')
    const [typeWhere, setTypeWhere] = useState('All')
    const [queryLimits, setQueryLimits] = useState({
        nameOrder,
        supplyWhere,
        typeWhere
    })

    // Get list of food places from hook
    const { data, loading } = useGetQueryPlaces(queryLimits)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    // Update query settings
    const handleFilterPlaces = () => {
        setQueryLimits({
            nameOrder,
            supplyWhere,
            typeWhere
        })
    }

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
            {loading && (
            <p>Loading ....</p>
        )}
            {
                data && (
                    <>

                    <p>Filter by type</p>
                    <select className="form-select" aria-label="Default select example" onChange={(e)=>{setTypeWhere(e.target.value)}} defaultValue={typeWhere}>
                        <option value="All">All types</option>
                        <option value="Café">Café</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Fast food">Fast food</option>
                        <option value="Grill">Grill</option>
                        <option value="Foodtruck">Foodtruck</option>
                    </select>

                    <p>Filter by supply</p>
                    <select className="form-select" aria-label="Default select example" onChange={(e)=>{setSupplyWhere(e.target.value)}} defaultValue={supplyWhere}>
                        <option value="All">All supplies</option>
                        <option value="Lunch">Lunch</option>
                        <option value="After Work">After Work</option>
                        <option value="A la Carte">A la carte</option>
                    </select>

                    <p>Sort name: </p>
                    <select className="form-select" aria-label="Default select example" onChange={(e)=>{setNameOrder(e.target.value)}} defaultValue={nameOrder}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>

                    <Button onClick={handleFilterPlaces}>Filter</Button>

                    <FoodPlacesTable foodPlaces={data} onFoodItemClick={onFoodItemClick} columns={columns} />
                    <ListGroup className="foodplace-listgroup">
                        {
                            data.map((foodplace, index) => (
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