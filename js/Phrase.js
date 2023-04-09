/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
  
    // Adds the chosen phrase, letter by letter, to the DOM
    addPhraseToDisplay() {
        const phraseList = document.querySelector('#phrase ul');
        const characters = this.phrase.split('');

        console.log(this.phrase);
        
        document.body.style.backgroundImage = `url('images/${this.phrase.toLowerCase().replace(/\s/g, '-')}.png')`;
  
        characters.forEach(character => {
            const li = document.createElement('li');
            if (character === ' ') {
                li.className = 'space';
            } else {
                li.className = `hide letter ${character}`;
                li.textContent = character;
            }
            phraseList.appendChild(li);
        });
    }
  
    // return true if phrase contains letter
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }
  
    // sets the class of the letter(s) on the board to show, and remove the hide class, if they are on the board.
    showMatchedLetter(letter) {
        const letters = document.querySelectorAll(`.hide.letter.${letter}`);
        letters.forEach(letter => {
            letter.classList.remove('hide');
            letter.classList.add('show');
        });
    }
}
  