import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";

function App() {

  const [food, setfood] = useState([...foodsJson])

  console.log(food);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
    </div>
  );
}

export default App;
