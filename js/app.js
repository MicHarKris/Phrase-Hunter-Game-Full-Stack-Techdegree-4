/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Get the start button element and create a new game class.
const startButton = document.getElementById('btn__reset');
const game = new Game();

// Start the game when the start button is clicked
startButton.addEventListener('click', () => {
    game.startGame();
});

// Get all the onscreen keyboard buttons and add event listeners to them, that reference the interaction handler function of the game class.
const keyboardButtons = document.querySelectorAll('#qwerty button');
keyboardButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        game.handleInteraction(event.target);
    });
});

// Adds an eventlistener to the keyboards keydown events, that reference the interaction handler function of the game class.
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    const buttons = document.querySelectorAll('.key');
    buttons.forEach((button) => {
        // Finds the button that corresponds to the selected key, that is not disabled, and calls the handler on it.
        if (button.textContent === key && !button.disabled) {
            game.handleInteraction(button);
        }
    });
});
