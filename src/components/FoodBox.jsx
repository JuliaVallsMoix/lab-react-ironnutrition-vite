// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from "antd";

function FoodBox({ food, onDelete }) {
    return (
        <Col >
            <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
                <img src={food.image} height={60} alt="food" />
                <p>Calories: {food.calories} </p>
                <p>Servings {food.servings} </p>
                <p>
                    <b>Total Calories: {food.calories * food.servings} </b> kcal
                </p>
                <Button type="primary" onClick={() => { onDelete(food.id) }}> Delete </Button>
            </Card>
        </Col>
    );
}

export default FoodBox;