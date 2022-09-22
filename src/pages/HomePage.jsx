import { useJsApiLoader, GoogleMap, MarkerF} from '@react-google-maps/api'
import { useState, useEffect } from 'react'
import SearchAddressForm from '../components/SearchAddressForm'
import MapsAPI from '../services/mapsAPI'
import userMarkerImg from '../assets/images/usermarker.png'

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

        // Set current user position to new coords
        setUserPosition(newCoords)

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
                            <MarkerF position={userPosition} icon={userMarkerImg} onClick={() => {map.panTo(userPosition)}} />
                            {/* Marker for each food place */}
                            {
                                places.map( (place, index) => (
                                    <MarkerF key={index} position={place} onClick={() => {
                                        map.panTo(place)
                                        console.log(MapsAPI.getDirectionsLink(userPosition, place))
                                    }} />
                                ) )
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