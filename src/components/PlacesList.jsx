import { ListGroup } from "react-bootstrap"
import { Link } from 'react-router-dom'
// loader
import BeatLoader from 'react-spinners/BeatLoader'

/**
 *
 * Component that will list all foodplaces in a listgroup
 *
 */
const PlacesList = ({foodPlaces, onFoodItemClick, isLoadingPlaces}) => {

    return (
        <div className="foodplaces-list-wrapper">
            {
                isLoadingPlaces && (
                    <BeatLoader  color='#F27166' />
                )
            }
            {
                foodPlaces && (
                    <ListGroup>
                        {
                            foodPlaces.map((foodplace, index) => (
                                <ListGroup.Item action as={Link} key={index} onClick={() => {onFoodItemClick(foodplace)}}
                                to={`/places/${foodplace.id}`}>
                                    <h3>{foodplace.name}</h3>
                                    <span>{foodplace.adress + ' ' + foodplace.town}</span>
                                    <br />
                                    <span>{foodplace.supply} | {foodplace.type}</span>
                                    <span>{foodplace.facebook}</span>
                                    <div className="foodplace-contact">
                                        {foodplace.phonenumber && (
                                            <a href={`tel:${foodplace.phonenumber}`}>{foodplace.phonenumber}</a>
                                        )}
                                        <br />
                                        {foodplace.email && (
                                            <a href={`mailto:${foodplace.email}`}>{foodplace.email}</a>
                                        )}
                                    </div>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                )
            }

        </div>
    )

}

export default PlacesList