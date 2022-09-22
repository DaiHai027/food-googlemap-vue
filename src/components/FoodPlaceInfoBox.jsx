import MapsAPI from '../services/mapsAPI'

const FoodPlaceInfoBox = ({userPosition, foodPlace, onClose}) => {

    return (
        <div className='place-info-box'>
            <p>Info about {foodPlace.name}</p>
            <p>{foodPlace.address + ' ' + foodPlace.town}</p>
            <p>{foodPlace.description}</p>
            <a href={MapsAPI.getDirectionsLink(userPosition, foodPlace.coords)} target='_blank'>Directions</a>
            <button onClick={onClose}>X</button>
        </div>
    )

}

export default FoodPlaceInfoBox