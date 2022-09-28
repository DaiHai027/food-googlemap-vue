import MapsAPI from '../services/mapsAPI'
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
//bootstrap
import { Button } from 'react-bootstrap'


/**
 *
 * Component to show pop up window on map displaying info about a food place
 *
 */
const FoodPlaceInfoBox = ({userPosition, foodPlace, onClose}) => {

    return (        
        <div className='place-info-box'>
            <h5 className='h-text-color'>{foodPlace.name}</h5>
            <p>{foodPlace.adress + ' ' + foodPlace.town}</p>
            <p>{foodPlace.description}</p>
            <a href={MapsAPI.getDirectionsLink(userPosition, foodPlace.coords)} target='_blank'>Directions</a>
            <Button onClick={onClose} className='btn-color x-btn'><FontAwesomeIcon icon={faXmark} /></Button>
        </div>    
    )

}

export default FoodPlaceInfoBox