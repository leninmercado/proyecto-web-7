// Genera un número aleatorio entre 1 y 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Obtiene elementos del DOM
const guessSubmit = document.getElementById("guessSubmit");
const guessField = document.getElementById("guessField");
const message = document.querySelector(".message");

let attempts = 0;

// Agrega un evento click al botón de "Adivinar"
guessSubmit.addEventListener("click", checkGuess);

function checkGuess() {
    // Obtiene el número ingresado por el usuario y lo convierte a un número entero
    const userGuess = Number(guessField.value);
    
    // Incrementa el contador de intentos
    attempts++;

    if (userGuess === randomNumber) {
        // Si el número ingresado es igual al número aleatorio
        message.textContent = `¡Felicidades! Adivinaste el número en ${attempts} intentos.`;
        message.style.color = "green";
        guessField.disabled = true; // Desactiva el campo de entrada
        guessSubmit.disabled = true; // Desactiva el botón de adivinar
    } else if (userGuess < randomNumber) {
        // Si el número ingresado es menor que el número aleatorio
        message.textContent = "El número es mayor. Intenta nuevamente.";
        message.style.color = "red";
    } else {
        // Si el número ingresado es mayor que el número aleatorio
        message.textContent = "El número es menor. Intenta nuevamente.";
        message.style.color = "red";
    }

    guessField.value = ""; // Limpia el campo de entrada
    guessField.focus(); // Devuelve el enfoque al campo de entrada
}
