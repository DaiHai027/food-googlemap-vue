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
                <p className='text-wrap' style={{maxWidth:'15rem'}}>{foodPlace.description}</p>
                <div>
                    <span>{foodPlace.cuisine}</span>
                    <span> | {foodPlace.type}</span>
                    <span> | {foodPlace.supply}</span>
                </div>
                <div className='place-contact'>
                    { foodPlace.phonenumber && (
                        <a href={`tel:${foodPlace.phonenumber}`}>
                            <img src='phone.svg' />
                        </a>
                    ) }
                    { foodPlace.email && (
                        <a href={`mailto:${foodPlace.email}`}>
                            <img src='email.svg' />
                        </a>
                    ) }
                    { foodPlace.website && (
                        <a href={foodPlace.website} target='_blank'>
                            <img src='internet.svg' />
                        </a>
                    ) }
                    { foodPlace.facebook && (
                        <a href={foodPlace.facebook} target='_blank'>
                            <img src='fb.svg' />
                        </a>
                    ) }
                    { foodPlace.instagram && (
                        <a href={foodPlace.instagram} target='_blank'>
                            <img src='ig.svg' />
                        </a>
                    ) }
                </div>
                <a href={MapsAPI.getDirectionsLink(userPosition, foodPlace.coords)} target='_blank'>Get directions to {foodPlace.name}</a>

            </div>

        </Card>
    )

}

export default FoodPlaceInfoBox