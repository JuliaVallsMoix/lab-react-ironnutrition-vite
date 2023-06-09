import { useState } from "react";
import { Row } from "antd";

import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

export default function FoodList() {
    // Create a state variable within the App component and store the foods array in it.

    const [foods, setFoods] = useState([...foodsJson])

    const handleDelete = (id) => {
        // Aplicar correctamente el método filter
        const filteredFoods = foods.filter(f => f.id !== id);

        // Actualizar la variable de estado
        setFoods(filteredFoods);
    }

    const handleCreateFood = (createdFood) => {
        // Actualizar el array de foods con la nueva comida (actualizar un array con un nuevo objeto)
        setFoods([createdFood, ...foods])
    }

    return <>
        <AddFoodForm onCreateFood={handleCreateFood} />

        {/** Iterate over the foods array and render a <FoodBox /> component for each individual food item. */}

        <Row style={{ justifyContent: 'center' }} >
            {foods.map(f => <FoodBox key={f.id} food={f} onDelete={handleDelete} />)}
        </Row>

    </>
}