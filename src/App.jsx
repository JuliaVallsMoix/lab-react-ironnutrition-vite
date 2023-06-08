import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {

  // Create a state variable within the App component and store the foods array in it.

  const [foods, setfoods] = useState([...foodsJson])

  console.log(foods);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {/** Iterate over the foods array and render a <FoodBox /> component for each individual food item. */}

      {foods.map(f => <FoodBox key={f.id} food={f} />)}

    </div>
  );
}

export default App;
