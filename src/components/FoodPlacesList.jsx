import { ListGroup } from "react-bootstrap"

/**
 *
 * Component that will list all foodplaces in a listgroup
 *
 */
const FoodPlacesList = ({foodPlaces, onFoodItemClick}) => {

    return (
        <ListGroup className="foodplace-listgroup">
            {
                foodPlaces.map((foodplace, index) => (
                    <ListGroup.Item action key={index} onClick={() => {onFoodItemClick(foodplace)}}>
                        {foodplace.name}
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    )

}

export default FoodPlacesList