import { useJsApiLoader, GoogleMap, MarkerF} from '@react-google-maps/api'
import { useState, useEffect } from 'react'
import SearchAddressForm from '../components/SearchAddressForm'
import MapsAPI from '../services/mapsAPI'

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

const HomePage = () => {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
        libraries: ['places']
    })

    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [userPosition, setUserPosition] = useState({lat: 55.6032746, lng: 13.0165715})

    const handleOnSubmit = async (address) => {

        if(!address) {
            return
        }

        map.panTo(await MapsAPI.getLatAndLng(address))

    }

    useEffect(() => {

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
                        <SearchAddressForm onSubmit={handleOnSubmit} />

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
                            {
                                places.map( (place, index) => (
                                    <MarkerF key={index} position={place} onClick={() => {map.panTo(place)}} />
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