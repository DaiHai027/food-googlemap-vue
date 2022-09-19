import { Container } from 'react-bootstrap'
import { useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api'

const center = { lat: 55.6032746, lng: 13.0165715 }

const HomePage = () => {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY
    })

    return (
        <Container>
            <h1>This is homepage</h1>

            <div className='maps-wrapper'>
                {
                    !isLoaded && (
                        <p>Loading google maps...</p>
                    )
                }

                {
                    isLoaded && (
                        <GoogleMap
                            center={center}
                            zoom={15}
                            mapContainerStyle={{width: '100%', height: '100%'}}

                        >

                            <Marker visible position={center} onClick={() => {console.log('Hello from marker')}} />
                            <Marker position={{lat: 55, lng: 13}} />

                        </GoogleMap>
                    )
                }
            </div>
        </Container>
    )

}

export default HomePage