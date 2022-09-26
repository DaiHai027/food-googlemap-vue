import { useJsApiLoader, GoogleMap, MarkerF, InfoBox} from '@react-google-maps/api'
import { useState, useEffect } from 'react'
import SearchAddressForm from '../components/SearchAddressForm'
import MapsAPI from '../services/mapsAPI'
import userMarkerImg from '../assets/images/usermarker.png'
import FoodPlaceInfoBox from '../components/FoodPlaceInfoBox'
import MapOffcanvas from '../components/MapOffcanvas'

// Array of library for maps api to include
const libraries = ['places']

// Hardcooded coordinates for food places, to be replaced by actual places from firebase
const places = [
    {
        lat: 55.58,
        lng: 13.01
    },
    {
        lat: 55.59,
        lng: 13
    },
    {
        lat: 55.57,
        lng: 13.02
    },
    {
        lat: 55.6,
        lng: 13.03
    },
]

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
    // State for position for info box about food place
    const [currentInfoBoxPlace, setCurrentInfoBoxPlace] = useState(null)

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

        // Get coordinates for address
        const newCoords = await MapsAPI.getLatAndLng(address)
        // Center map on the new coordinates
        map.panTo(newCoords)

    }

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
     * Function to handle what will happen when user clicks a food place marker on map
     *
     */
    const handlePlaceMarkerClick = (place) => {
        // Center map on food place position
        map.panTo(place)
        // Set position for info box so that it can be displayed
        setCurrentInfoBoxPlace(place)
    }

    /**
     *
     * Function to handle what will happen when user clicks close button on info box
     *
     */
    const handleInfoBoxClose = () => {
        // Set position for info box to null so that it hides from map
        setCurrentInfoBoxPlace(null)
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
            <h1>This is homepage</h1>

            <MapOffcanvas />

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
                        <SearchAddressForm onSubmit={handleOnSubmit} />

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
                                places.map( (place, index) => (
                                    <MarkerF
                                        key={index}
                                        position={place}
                                        onClick={() => {
                                            handlePlaceMarkerClick(place)
                                        }}
                                    />
                                ) )
                            }

                            {/* Info box component to show when user clicks food place marker on map */}
                            {
                                currentInfoBoxPlace && (
                                    <InfoBox
                                        position={currentInfoBoxPlace}
                                        options={{
                                            closeBoxURL: '',
                                            enableEventPropagation: true
                                        }}
                                    >
                                        <FoodPlaceInfoBox
                                            userPosition={userPosition}
                                            foodPlace={currentInfoBoxPlace}
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