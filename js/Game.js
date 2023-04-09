/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Initializes the game state and declared default phrase-list
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("Life is like a box of chocolates"),
            new Phrase("May the force be with you"),
            new Phrase("You talking to me"),
            new Phrase("I feel the need for speed"),
            new Phrase("There is no place like home"),
        ];
        this.activePhrase = null;
    }
  
    startGame() {
        // Hide the start screen
        const overlay = document.querySelector("#overlay");
        overlay.style.display = "none";
  
        // Choose a random phrase from the list, and display it on the screen
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
  
    // Choose a random phrase from the list of available phrases
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    }
  
    
    // Handle a button click, by waiting for a call from the button.addEventListener
    handleInteraction(button) {
        const letter = button.textContent;
        // If the letter is in the phrase, show it on the screen
        if (this.activePhrase.checkLetter(letter)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);
            // If the player has won, end the game
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        // If the letter is not in the phrase, remove a life
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
        button.disabled = true;
    }

    // Remove a life from the player
    removeLife() {
        const lives = document.querySelectorAll(".tries img");
        lives[this.missed].src = "images/lostHeart.png";
        this.missed++;
        // check if the game is over
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }
    // Check if the player has won the game (if there are no hidden letters left)
    checkForWin() {
        const hiddenLetters = document.querySelectorAll(".hide");
        return hiddenLetters.length === 0;
    }
  
    // Show the game over screen
    gameOver(won) {
        const overlay = document.querySelector("#overlay");
        overlay.style.display = "flex";
        // overlay.classList.remove("start");
        // If the player has won, show a win message
        if (won) {
            overlay.classList.remove("start");
            overlay.classList.remove("lose");
            overlay.classList.add("win");
            overlay.querySelector("h1").textContent = "Congratulations, you won!";
            // If the player has lost, show a lose message
        } else {
            overlay.classList.remove("start");
            overlay.classList.remove("win");
            overlay.classList.add("lose");
            overlay.querySelector("h1").textContent = "Sorry, you lost. Try again!";
        }
  
        this.gameReset();
    }
  
    // Reset the game
    gameReset() {
        const phraseList = document.querySelector("#phrase ul");
        phraseList.innerHTML = "";
        const keys = document.querySelectorAll(".key");
        keys.forEach((key) => {
            key.disabled = false;
            key.classList.remove("chosen", "wrong");
        });
        const lives = document.querySelectorAll(".tries img");
        lives.forEach((life) => (life.src = "images/liveHeart.png"));
        this.missed = 0;
        this.activePhrase = null;
    }
}
  