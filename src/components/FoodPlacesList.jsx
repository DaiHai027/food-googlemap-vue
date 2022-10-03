import { ListGroup } from "react-bootstrap" 
import { Link } from 'react-router-dom'


/**
 *
 * Component that will list all foodplaces in a listgroup
 *
 */
const FoodPlacesList = ({foodPlaces, onFoodItemClick, isLoadingPlaces}) => {

    return (
        <>                                      
            {               
                <ListGroup.Item 
                    action as={Link}                     
                    onClick={() => {onFoodItemClick(foodPlaces)}}
                    to={`/places/${foodPlaces.id}`}
                >
                    <h3>{foodPlaces.name}</h3>
                    <span>{foodPlaces.adress + ' ' + foodPlaces.town}</span>
                    <br />
                    <span>{foodPlaces.supply} | {foodPlaces.type}</span>
                    <span>{foodPlaces.facebook}</span>
                    <div className="foodplace-contact">
                        {foodPlaces.phonenumber && (
                            <a href={`tel:${foodPlaces.phonenumber}`}>{foodPlaces.phonenumber}</a>
                        )}
                        <br />
                        {foodPlaces.email && (
                            <a href={`mailto:${foodPlaces.email}`}>{foodPlaces.email}</a>
                        )}
                    </div>
                </ListGroup.Item>                 
            }
        </>
    )

}

export default FoodPlacesList