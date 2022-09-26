import { ListGroup } from "react-bootstrap"

/**
 *
 * Component that will list all foodplaces in a listgroup
 *
 */
const FoodPlacesList = ({foodPlaces, onFoodItemClick, isLoadingPlaces}) => {

    return (
        <div className="foodplaces-list-wrapper">
            <h2>Restaurants</h2>
            {
                isLoadingPlaces && (
                    <p>... Loading food places</p>
                )
            }
            {
                foodPlaces && (
                    <ListGroup className="foodplace-listgroup">
                        {
                            foodPlaces.map((foodplace, index) => (
                                <ListGroup.Item action key={index} onClick={() => {onFoodItemClick(foodplace)}}>
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
                    </ListGroup>
                )
            }

        </div>
    )

}

export default FoodPlacesList