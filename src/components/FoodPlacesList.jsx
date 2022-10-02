import { ListGroup } from "react-bootstrap" 
import { Link } from 'react-router-dom'
// loader
import BeatLoader from 'react-spinners/BeatLoader'

/**
 *
 * Component that will list all foodplaces in a listgroup
 *
 */
const FoodPlacesList = ({foodPlaces, onFoodItemClick, isLoadingPlaces}) => {

    return (
        <>                                          
                {!isLoadingPlaces && foodPlaces && 
                    foodPlaces.map(foodplace => (
                        <ListGroup.Item 
                            action 
                            as={Link} 
                            key={foodPlaces.id} 
                            onClick={() => {onFoodItemClick(foodplace)}}
                            to={`/places/${foodplace.id}`}
                        >
                            <h3>{foodplace.name}</h3>
                            <span>{foodplace.adress + ' ' + foodplace.town}</span>
                            <br />
                            <span>{foodplace.supply} | {foodplace.type}</span>
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
              
                    

        </>
    )

}

export default FoodPlacesList