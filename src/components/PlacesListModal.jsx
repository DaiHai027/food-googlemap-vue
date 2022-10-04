import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
// components
import SearchAddressForm from '../components/SearchAddressForm'
// hooks
import useGetQueryPlaces from '../hooks/useGetQueryPlaces'
// bootstrap
import  ListGroup  from 'react-bootstrap/ListGroup'
// fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
// API
import MapsAPI from '../services/mapsAPI'

const PlacesListModal = ({onFoodItemClick, onAddressFormSubmit, userPosition}) => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    // States for how food places list should be filtered
    const [nameOrder, setNameOrder] = useState('asc')
    const [supplyWhere, setSupplyWhere] = useState('All')
    const [typeWhere, setTypeWhere] = useState('All')
    const [townWhere, setTownWhere] = useState('Malmö')
    const [queryLimits, setQueryLimits] = useState({
        nameOrder,
        supplyWhere,
        typeWhere,
        townWhere,
    })

    // Get list of food places from hook
    const { data, loading } = useGetQueryPlaces(queryLimits)

    /**
     *
     * Function to handle when search form has been submitted
     *
     */
     const handleOnSubmit = async (address) => {

        // If no address has been given, return
        if(!address) {
            return
        }

        // Update states to show only given town
        setTownWhere(await MapsAPI.getTown(userPosition))

        // Let parent component take over
        onAddressFormSubmit(address)

    }

    /**
     *
     * Function to reset current selected town so that all will show in food places list
     *
     */
    const resetTownWhere = () => {
        setTownWhere(null)
    }

    useEffect( () => {

        const changeQueryLimits = async () => {
            setQueryLimits({
                nameOrder,
                supplyWhere,
                typeWhere,
                townWhere: await MapsAPI.getTown(userPosition),
            })
        }
        changeQueryLimits()

    }, [nameOrder, supplyWhere, typeWhere, userPosition] )

    useEffect( () => {

        const changeTownWhere = async () => {
            setTownWhere(await MapsAPI.getTown(userPosition))
        }
        changeTownWhere()

    }, [userPosition] )

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="mt-3 col-12 col-md-3">
                Find a Foodplace
            </Button>

            {
                show && (
                    <div className='foodplace-modal'>
                        <h2>Places near you</h2>
                        <FontAwesomeIcon icon={faXmark} className='foodplace-modal-close' onClick={handleClose} />

                        {
                            loading && (
                                <p>Loading ....</p>
                            )
                        }

                        {
                            data && (
                                <>

                                <label htmlFor='sort-select-type'>Filter by type</label>
                                <select id='sort-select-type' className="form-select" onChange={(e)=>{setTypeWhere(e.target.value)}} defaultValue={typeWhere}>
                                    <option value="All">All types</option>
                                    <option value="Café">Café</option>
                                    <option value="Restaurant">Restaurant</option>
                                    <option value="Fast food">Fast food</option>
                                    <option value="Grill">Grill</option>
                                    <option value="Foodtruck">Foodtruck</option>
                                </select>

                                <label htmlFor='sort-select-supply'>Filter by supply</label>
                                <select id='sort-select-supply' className="form-select" onChange={(e)=>{setSupplyWhere(e.target.value)}} defaultValue={supplyWhere}>
                                    <option value="All">All supplies</option>
                                    <option value="Lunch">Lunch</option>
                                    <option value="After Work">After Work</option>
                                    <option value="A la Carte">A la carte</option>
                                </select>

                                <label htmlFor='sort-select-name-order'>Sort name: </label>
                                <select id='sort-select-name-order' className="form-select" onChange={(e)=>{setNameOrder(e.target.value)}} defaultValue={nameOrder}>
                                    <option value="asc">Acending</option>
                                    <option value="desc">Descending</option>
                                </select>

                                {
                                    townWhere && (
                                        <Button variant='outline-primary' className='townbutton-outline'>
                                            {townWhere}
                                        </Button>
                                    )
                                }

                                <SearchAddressForm onSubmit={handleOnSubmit} />

                                <ListGroup className="foodplace-listgroup">

                                    {
                                        data.map((foodplace, index) => (
                                            <ListGroup.Item action key={index} onClick={() => {onFoodItemClick(foodplace)}}>
                                                <h3>{foodplace.name}</h3>
                                                <span>{foodplace.adress + ' ' + foodplace.town}</span>
                                                <br />
                                                <span>{foodplace.supply} | {foodplace.type} | {foodplace.cuisine}</span>
                                            </ListGroup.Item>
                                        ))
                                    }
                                </ListGroup>

                                </>
                            )
                        }
                    </div>
                )
            }
        </>
    )
}

export default PlacesListModal