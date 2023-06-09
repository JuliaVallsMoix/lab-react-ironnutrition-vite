// Your code here

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function AddFoodForm({ onCreateFood }) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newFood = {
            name: name,
            image: image, 
            calories: calories,
            servings: servings,
            id: uuidv4()
        }

        onCreateFood(newFood);
    }

    return (
        <div style={{ margin: '1rem' }} >
            <form className="form" onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', gap: '1rem', alignItems: 'center', border: '1px grey solid', padding: '1em' }}>
                <div style={{ display: 'flex', gap: '1rem', textAlign: 'center' }} >
                    <label htmlFor="name">Name:</label>
                    <input id="name" name="name" type="text" maxLength={50} value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div style={{ display: 'flex', gap: '1rem', textAlign: 'center' }} >
                    <label htmlFor="image">Image:</label>
                    <input name="image" type="url" required value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <div style={{ display: 'flex', gap: '1rem', textAlign: 'center' }} >
                    <label htmlFor="calories">Calories:</label>
                    <input name="calories" type="number" min={0} max={10000} value={calories} onChange={(e) => setCalories(e.target.value)} required />
                </div>
                <div style={{ display: 'flex', gap: '1rem', textAlign: 'center' }} >
                    <label htmlFor="servings">Servings</label>
                    <input name="servings" type="number" min={1} max={1000} value={servings} onChange={(e) => setServings(e.target.value)} required />
                </div>
                <button style={{ backgroundColor: 'gainsboro' }}  >Create</button>
            </form>
        </div>

    )
}