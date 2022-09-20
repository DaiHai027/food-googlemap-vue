import { useJsApiLoader, GoogleMap, MarkerF} from '@react-google-maps/api'
import { useState, useEffect } from 'react'
import SearchCityForm from '../components/SearchAddressForm'
import MapsAPI from '../services/mapsAPI'

const defaultPosition = { lat: 55.6032746, lng: 13.0165715 }

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
        googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY
    })

    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [userPosition, setUserPosition] = useState(null)

    const handleOnSubmit = async (address) => {

        if(!address) {
            return
        }

        map.panTo(await MapsAPI.getLatAndLng(address))

    }

    useEffect(() => {

        if ('geolocation' in navigator) {
            console.log('geolocation possible')
            navigator.geolocation.getCurrentPosition((position) => {
                setUserPosition({lat: position.coords.latitude, lng: position.coords.longitude})
              })
          } else {
            console.log('geolocation not possible :(')
          }

          const someFunction = async () => {
            console.log( await MapsAPI.getLatAndLng('malmö') )
          }
          someFunction()

    }, [])

    return (
        <>
            <h1>This is homepage</h1>

            <SearchCityForm onSubmit={handleOnSubmit} />

            <div className='maps-wrapper'>
                {
                    !isLoaded && (
                        <p>Loading google maps...</p>
                    )
                }

                {
                    isLoaded && (
                        <GoogleMap
                            center={userPosition ? userPosition : defaultPosition}
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
                    )
                }
            </div>
        </>
    )

}

export default HomePage