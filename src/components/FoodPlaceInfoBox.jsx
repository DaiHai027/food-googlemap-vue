import MapsAPI from '../services/mapsAPI'
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
//bootstrap
import { Button, Card } from 'react-bootstrap'


/**
 *
 * Component to show pop up window on map displaying info about a food place
 *
 */
const FoodPlaceInfoBox = ({userPosition, foodPlace, onClose}) => {

    return (
        <Card className='place-info-box'>
            <div className='box-header'>
                <h5 className='h-text-color-white'>{foodPlace.name}</h5>
                <Button onClick={onClose} className='x-btn'><FontAwesomeIcon icon={faXmark} /></Button>
            </div>
            <div className='address-box'>
                <p>{foodPlace.adress + ' ' + foodPlace.town}</p>
                <p>{foodPlace.description}</p>
                <div>
                    <span>{foodPlace.cuisine}</span>
                    <span> | {foodPlace.type}</span>
                    <span> | {foodPlace.supply}</span>
                </div>
                <div className='place-contact'>
                    { foodPlace.phonenumber && (
                        <a href={`tel:${foodPlace.phonenumber}`}>{foodPlace.phonenumber}</a>
                    ) }
                    { foodPlace.email && (
                        <a href={`mailto:${foodPlace.email}`}>{foodPlace.email}</a>
                    ) }
                    { foodPlace.website && (
                        <a href={foodPlace.website}>{foodPlace.website}</a>
                    ) }
                    { foodPlace.facebook && (
                        <a href={foodPlace.website}>{foodPlace.facebook}</a>
                    ) }
                    { foodPlace.instagram && (
                        <a href={foodPlace.website}>{foodPlace.instagram}</a>
                    ) }
                </div>
                <a href={MapsAPI.getDirectionsLink(userPosition, foodPlace.coords)} target='_blank'>Directions</a>

            </div>

        </Card>
    )

}

export default FoodPlaceInfoBox