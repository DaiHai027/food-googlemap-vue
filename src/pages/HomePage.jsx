import { useJsApiLoader, GoogleMap, MarkerF, InfoBox} from '@react-google-maps/api'
import { useState, useEffect } from 'react'
import SearchAddressForm from '../components/SearchAddressForm'
import MapsAPI from '../services/mapsAPI'
import userMarkerImg from '../assets/images/usermarker.png'
import FoodPlaceInfoBox from '../components/FoodPlaceInfoBox'
import FoodPlacesList from '../components/FoodPlacesList'

// Array of library for maps api to include
const libraries = ['places']

const foodPlaces = [
    {
        name: 'My food place',
        address: 'Östra promenaden 15',
        town: 'Malmö',
        description: 'This is great place to eat!',
        phone: 123456789,
        coords: {
            lat: 55.606689,
            lng: 13.0131379
        }
    },
    {
        name: 'Super nice café',
        address: 'Drottninggatan 20',
        town: 'Malmö',
        description: 'A lot of cookies and coffee',
        phone: 123456789,
        coords: {
            lat: 55.6025315,
            lng: 13.0072006
        }
    }
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
    const [currentSelectedFoodPlace, setCurrentSelectedFoodPlace] = useState(null)

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
     * Function to handle what will happen when user clicks close button on info box
     *
     */
    const handleInfoBoxClose = () => {
        // Set position for info box to null so that it hides from map
        setCurrentInfoBoxPlace(null)
        setCurrentSelectedFoodPlace(null)
    }

    const handleFoodItemClick = (place) => {
        setCurrentInfoBoxPlace(place)
        setCurrentSelectedFoodPlace(place)
        map.panTo(place.coords)
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

                        <FoodPlacesList foodPlaces={foodPlaces} onFoodItemClick={handleFoodItemClick} />

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
                                foodPlaces.map( (place, index) => (
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