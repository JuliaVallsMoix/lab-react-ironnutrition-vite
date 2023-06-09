// Your code here

export default function FoodBox({ food, onDelete }) {
    return (
        <div style={{ display: 'Flex', flexWrap: 'wrap', flexDirection: 'column', textAlign: 'center', justifyContent:'center', alignItems: 'center', border: '1px grey solid', color: 'black' }}>
            <h2 style={{ fontSize: 'bold' }}> {food.name} </h2>

            <img style={{ width: '200px' }} src={food.image} alt={food.name} />

            <p>Calories: {food.calories} </p>
            <p>Servings <strong>{food.servings}</strong> </p>

            <p>
                <b>Total Calories: {food.servings * food.calories} </b> kcal
            </p>

            <button style={{ backgroundColor: 'gainsboro', marginBottom: '1rem' }} onClick={() => onDelete(food.id)}>Delete</button>
        </div>
    )
}