// Your code here

export default function FoodBox({ food }) {
    return (
        <div>
            <p> {food.name} </p>

            <img style={{ width: '200px' }} src={food.image} alt={food.name} />

            <p>Calories: {food.calories} </p>
            <p>Servings {food.servings} </p>

            <p>
                <b>Total Calories: {food.servings * food.calories} </b> kcal
            </p>

            <button>Delete</button>
        </div>
    )
}