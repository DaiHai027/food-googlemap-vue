import MapsAPI from '../services/mapsAPI'

const FoodPlaceInfoBox = ({userPosition, foodPlace, onClose}) => {

    return (
        <div className='place-info-box'>
            <p>Hello world</p>
            <a href={MapsAPI.getDirectionsLink(userPosition, foodPlace)} target='_blank'>Directions</a>
            <button onClick={onClose}>X</button>
        </div>
    )

}

export default FoodPlaceInfoBox