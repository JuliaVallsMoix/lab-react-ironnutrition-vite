import { useState } from "react";
import { Row } from "antd";

import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";
import { HiBan } from "react-icons/hi";

export default function FoodList() {
    // Create a state variable within the App component and store the foods array in it.

    const [foods, setFoods] = useState([...foodsJson])
    const [search, setSearch] = useState('');

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

    const handleFilter = (e) => {
        // Cada vez que se ejecuta esta función, es que ha cambiado el valor del input search. Utiliza adecuadamente el método filter para acutalizar el array de foods que contengan la subcadena de texto de e.target.value

        const keyword = e.target.value;

        const searchedFoods = foodsJson.filter(f => new RegExp(keyword, 'i').test(f.name));

        setSearch(keyword);

        setFoods(searchedFoods);

    }

    return <>
        <AddFoodForm onCreateFood={handleCreateFood} />

        <Search value={search} onSearchChange={handleFilter} />

        {/** Iterate over the foods array and render a <FoodBox /> component for each individual food item. */}

        <Row style={{ justifyContent: 'center' }} >

            {foods.length === 0 && <div>
                <p style={{fontSize: '2rem'}} ><strong>Oops! There is no more content to show.</strong></p>
                <HiBan style={{height: '4rem', width: '4rem'}} />

            </div>}
            {foods.map(f => <FoodBox key={f.id} food={f} onDelete={handleDelete} />)}
        </Row>

    </>
}
