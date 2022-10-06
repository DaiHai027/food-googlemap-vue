import { ListGroup } from "react-bootstrap"
import FoodPlacesListItem from "./FoodPlacesListItem"


/**
 *
 * Component that will list all foodplaces in a listgroup
 *
 */
const FoodPlacesList = ({foodPlaces, onFoodItemClick, isLoadingPlaces}) => {

    return (
        <ListGroup className="foodplace-listgroup">

            {
                foodPlaces.map((foodplace, index) => (
                    <FoodPlacesListItem key={foodplace.id} foodplace={foodplace} onFoodItemClick={onFoodItemClick} />
                ))
            }
        </ListGroup>
    )

}

export default FoodPlacesList