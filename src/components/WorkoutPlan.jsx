import { useState } from 'react';
import '../styles/WorkoutPlan.css';  

function WorkoutPlan() {                                 // State variables to manage user input and display
    const [goal, setGoal] = useState('muscle-building');    
    const [level, setLevel] = useState('beginner');
    const [plan, setPlan] = useState(null);
    const [showPlan, setShowPlan] = useState(false);      
    const [error, setError] = useState('');

    const fetchData = async () => {             
    // Function to fetch the workout plan from the API
        setError('');  
        try {
            console.log('Fetching data...');
            const response = await fetch('https://phase-2-project-backend.vercel.app/workoutplans');
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            console.log('Fetched data:', data);
            
             // Filtering the data based on the selected goal and level
            const filteredPlan = data.workoutPlans.find(item => item.goal === goal && item.level === level);
            if (filteredPlan) {
                setPlan(filteredPlan);
            } else {
                setError('No workout plan available for the selected criteria.');
                setPlan(null);
            }
            
            setShowPlan(true);  // display plan after fetching data 
        } catch (error) {
            setError(`Error fetching data: ${error.message}`);
            setShowPlan(false);  // show error message when the plan is not able to be fetched 
        }
    };

    return (
        <div className="workout-plan-section">
            <div className="form-container">
                <h2>Generate Your Workout Plan</h2>
                <form>
                    <label>Fitness Goal:</label>
                    <select value={goal} onChange={e => setGoal(e.target.value)}>
                        <option value="muscle-building">Muscle Building</option>
                        <option value="endurance">Endurance</option>
                        <option value="weight-loss">Weight Loss</option>
                    </select>

                    <label>Fitness Level:</label>
                    <select value={level} onChange={e => setLevel(e.target.value)}>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>

                    <button type="button" onClick={fetchData} className="btn-generate">Generate Workout Plan</button>
                </form>
            </div>
            {error && <p className="error-message">{error}</p>}
            {showPlan && (
                <div className="workout-plan-display">
                    <h3>Workout Plan</h3>
                    {plan ? (
                        <div>
                            {plan.exercises.map((exercise, index) => (
                                <div key={index} className="exercise-item">
                                    <h4>{exercise.name}</h4>
                                    <p>Sets: {exercise.sets}</p>
                                    <p>Reps: {exercise.reps}</p>
                                    <p>Duration: {exercise.durationMinutes} minutes</p>
                                    <p>{exercise.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No workout plan available </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default WorkoutPlan;
