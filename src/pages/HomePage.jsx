import { useJsApiLoader, GoogleMap, MarkerF, InfoBox, Autocomplete } from '@react-google-maps/api'
import { useState, useEffect } from 'react'
// assets
import userMarkerImg from '../assets/images/usermarker.png'
//components
import SearchAddressForm from '../components/SearchAddressForm'
import FoodPlaceInfoBox from '../components/FoodPlaceInfoBox'
import MapOffcanvas from '../components/MapOffcanvas'
import FoodPlacesList from '../components/FoodPlacesList'
//hooks
import useGetPlaces from '../hooks/useGetPlaces'
import AddtipForm from '../components/AddtipForm'
// API
import MapsAPI from '../services/mapsAPI'
import { Button, Modal } from 'react-bootstrap'
import PlacesListModal from '../components/PlacesListModal'


// Array of library for maps api to include
const libraries = ['places']

/**
 *
 * Home/default component to show interactive map of all food places
 *
 */
const HomePage = () => {

    // Initiate maps api script, giving it api key & libraries to include
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
        libraries
    })

    // State for interactable map instance
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    // State for users current position
    const [userPosition, setUserPosition] = useState({lat: 55.6032746, lng: 13.0165715})
    // State for food place currently selected
    const [currentSelectedFoodPlace, setCurrentSelectedFoodPlace] = useState(null)
    const [isModalOPen, setIsModalOpen] = useState(false)

    const { data: foodPlaces, loading: isLoadingPlaces } = useGetPlaces()



    /**
     *
     * Function to handle what will happen when user clicks user icon on map
     *
     */
    const handleUserMarkerClick = () => {
        // Center map on users current location
        map.panTo(userPosition)
    }

    /**
     *
     * Function to handle what will happen when user clicks close button on info box
     *
     */
    const handleInfoBoxClose = () => {
        // Set current selected food place to null so that elements displaying their info hides
        setCurrentSelectedFoodPlace(null)
    }

    /**
     *
     * Function to handle what will happen when user clicks on a food place marker or a food place list item
     *
     */
    const handleFoodItemClick = (place) => {
        // Update current selected food place so that elements displaying their info shows
        setCurrentSelectedFoodPlace(place)
        map.panTo(place.coords)
    }

    /**
     *
     * Function to handle when search adress form has been submitted
     *
     */
    const handleOnSubmit = async (address) => {

        // If no address has been given, return
        if(!address) {
            return
        }

        // Get coordinates for address
        const newCoords = await MapsAPI.getLatAndLng(address)
        // Center map on the new coordinates
        map.panTo(newCoords)

    }

    useEffect(() => {

        // If user browser shares its geolocation, set current user position to those coordinates
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserPosition({lat: position.coords.latitude, lng: position.coords.longitude})
              })
          }

    }, [])

    return (
        <>

            <AddtipForm />
            {/* <h1>This is homepage</h1> */}

            {/* Sidebar containing list of food places */}
            <MapOffcanvas onFoodItemClick={handleFoodItemClick} onAddressFormSubmit={handleOnSubmit} />



            <div className='maps-wrapper'>
                {
                    !isLoaded && (
                        <p>Loading google maps...</p>
                    )
                }

                {
                    isLoaded && (

                        <>
                        {/* Form for centering map at different address */}
                        {/* <SearchAddressForm onSubmit={handleOnSubmit} /> */}

                        {/* <FoodPlacesList foodPlaces={foodPlaces} onFoodItemClick={handleFoodItemClick} isLoadingPlaces={isLoadingPlaces} /> */}

                        <PlacesListModal />

                        {/* The map itself */}
                        <GoogleMap
                            center={userPosition}
                            zoom={15}
                            mapContainerStyle={{width: '100%', height: '100%'}}
                            options={{
                                streetViewControl: false,
                                mapTypeControl: false,
                                styles: [{
                                    elementType: "labels",
                                    featureType: "poi",
                                    stylers: [{ visibility: "off", }],
                                }],
                            }}
                            onLoad={map => setMap(map)}
                        >

                            {/* Marker for current user position */}
                            <MarkerF
                                position={userPosition}
                                icon={userMarkerImg}
                                onClick={handleUserMarkerClick}
                            />

                            {/* Marker for each food place */}
                            {
                                foodPlaces && foodPlaces.map( (place, index) => (
                                    <MarkerF
                                        key={index}
                                        position={place.coords}
                                        onClick={() => {
                                            handleFoodItemClick(place)
                                        }}
                                    />
                                ) )
                            }

                            {/* Info box component to show when user clicks food place marker on map */}
                            {
                                currentSelectedFoodPlace && (
                                    <InfoBox
                                        position={currentSelectedFoodPlace.coords}
                                        options={{
                                            closeBoxURL: '',
                                            enableEventPropagation: true
                                        }}
                                    >
                                        <FoodPlaceInfoBox
                                            userPosition={userPosition}
                                            foodPlace={currentSelectedFoodPlace}
                                            onClose={handleInfoBoxClose}
                                        />
                                    </InfoBox>
                                )
                            }
                        </GoogleMap>
                        </>
                    )
                }
            </div>
        </>
    )

}

export default HomePage