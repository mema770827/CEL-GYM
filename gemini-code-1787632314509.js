let timerInterval;
let seconds = 0;
const userWeight = 75; // Se extrae de la base de datos del usuario
const workoutMET = 6.0; // Cambia según la intensidad del ejercicio

function startWorkout() {
    timerInterval = setInterval(() => {
        seconds++;
        updateDisplay();
        calculateCalories();
    }, 1000);
}

function calculateCalories() {
    let minutes = seconds / 60;
    // Aplicando la fórmula MET
    let caloriesBurned = (workoutMET * 3.5 * userWeight / 200) * minutes;
    document.getElementById('calories-display').innerText = caloriesBurned.toFixed(2) + " kcal";
}