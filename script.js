// Set the secret number
let secretNumber = 42;

function checkGuess() {
  // Get the user's guess from the input element
  const userGuess = parseInt(document.getElementById('userGuess').value);

  // Get the feedback paragraph element
  const feedbackElement = document.getElementById('feedback');

  // Check if the guess is correct, too high, or too low
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedbackElement.textContent = 'Please enter a valid number between 1 and 100.';
  } else if (userGuess === secretNumber) {
    feedbackElement.textContent = 'Congratulations! You guessed the correct number!';
  } else if (userGuess < secretNumber) {
    feedbackElement.textContent = 'Too low. Try again.';
  } else {
    feedbackElement.textContent = 'Too high. Try again.';
  }
}