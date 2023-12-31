const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
//

const createDivsForChars = (word) => {
  const wordContainer = document.querySelector('#word-container');
  for (const letter of word) {
    wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  const letterButtonContainer = document.querySelector('#letter-buttons');
  for (const char of ALPHABET) {
    letterButtonContainer.insertAdjacentHTML('beforeend', `<button>${char}</button>`);
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};

// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => document.querySelector(`div.${letter}`) !== null;

// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter) => {
  const matchingDivsToLetter = document.querySelectorAll(`div.${letter}`); 
  
  for (const div of matchingDivsToLetter) {
    div.innerHTML=letter
  }
};

//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = () => {
  numWrong += 1;
  //if numWrong < 5 then do this
  if (numWrong < 5) {
    
  } else if () {

  }
  //else if numWrong === 5 then disable all buttons, show the hidden element, link tag 
  
  const matchingDivsToLetter = document.querySelectorAll(`div.${letter}`); 
  for (const div of matchingDivsToLetter) {
    div.innerHTML=letter
  }

  if (isLetterInWord(letter_var)){
    handleCorrectGuess(letter_var);
  } else {
    handleWrongGuess(letter_var);
  }

};

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  for (const button of document.querySelectorAll('button')) {
    // add an event handler to handle clicking on a letter button
    button.addEventListener("click", (evt) => {
    //disableLetterButton
    // when they click the button, then turn off the button 
    disableLetterButton(evt.target); 
    // we get the text/letter from that button 
    const letter_var = evt.target.innerHTML;
    if (isLetterInWord(letter_var)){
      handleCorrectGuess(letter_var);
    } else {
      handleWrongGuess(letter_var);
    }
    //if that text/letter is in word: handle for correct guess 
    //else (if letter is not in word): handle for wrong guess 
    })
     
    button.addEventListener(click, handleWrongGuess)

    //check if guessed letter aka correct button is chosen is in the word with if/else
  }

  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
})();