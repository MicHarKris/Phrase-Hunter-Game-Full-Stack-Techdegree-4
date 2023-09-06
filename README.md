# Phrase-Hunter-Game - Full Stack Techdegree Project 4
 A Word Guessing game in the style of Hangman

'In this project, you'll create a browser-based, word guessing game: "Phrase Hunter." You’ll use JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.
Using JavaScript, you’ll create two JavaScript classes with specific properties and methods. You'll create a Game class for managing the game, and a Phrase class to help with creating an array of Phrase objects.'

The game features 5 phrases from popular movies, and the objective is to guess the phrases, by guessing individual letters one by one. Each wrong guess costs a life point, and when you reach 5 mistakes, you lose the game, and can retry.

Extra Credit; 
- Add keyboard functionality
Added a function that listens for a button press on the keyboard, and compares the pressed key with any of the buttons on the board, that has not already been guessed at.

- Making the project your own
I have messed a bit around in the CSS, to apply the 'start' color to the overlay in the starting screen, and in the JS to apply the correct Win or Lose color when depending on outcome in the overlay at the game over screen.
I have added a background image that matches the phrase being guessed, to serve as a hint to the player - it changes dynamically depending on the phrase in question.
I have added a 'disabled' parameter to the buttons, to ensure that they cannot be pressed, if they have already been pressed. This could otherwise have caused repeatedly lost lives, if the player accidentally guessed at a previously guessed letter.
