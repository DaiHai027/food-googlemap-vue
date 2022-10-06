import { ListGroup } from "react-bootstrap"

const FoodPlacesListItem = ({foodplace, onFoodItemClick}) => {

    return (
        <ListGroup.Item action onClick={() => {onFoodItemClick(foodplace)}}>
            <h3>{foodplace.name}</h3>
            <span>{foodplace.adress + ' ' + foodplace.town}</span>
            <br />
            <span>{foodplace.supply} | {foodplace.type} | {foodplace.cuisine}</span>
        </ListGroup.Item>
    )

}

export default FoodPlacesListItem