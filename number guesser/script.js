/*Create a generateTarget() function. This function will be called at the start of each new round 
in order to generate the new secret target number.
This function should return a random integer between 0 and 9. */

/*Create a compareGuesses() function. This function will be called each round to determine
 which guess is closest to the target number.
This function:
Has three parameters representing the user (human) guess, a computer guess, and the secret target number
 to be guessed.
Determines which player (human or computer) wins based on which guess is closest to the target. 
If both players are tied, the human user should win.
Return true if the human player wins, and false if the computer player wins.
*/

/*
Create an updateScore() function. This function will be used to correctly increase the winner’s score
 after each round.
This function:
Has a single parameter. This parameter will be a string value representing the winner.
Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to 
updateScore. The string passed in will be either 'human' or 'computer'.
Does not need to return any value.
*/

/*
Create an advanceRound() function. This function will be used to update the round number after each round.
advanceRound() should increase the value of currentRoundNumber by 1.
After completing advanceRound(), your Number Guesser game should be fully operational.
 You should be able to make guesses, see your or the computer score increase correctly,
  move to the next round, and see the correct round displayed.
*/



let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// I wrote a function that will return a random whole number between 0 and 9
const generateTarget = function () {
  return Math.floor(Math.random() * 10);
};
// declared a function with parameteres for player guesses and the target that needs to be guessed
const compareGuesses = function (humanGuess, computerGuess, secretTarget) {
 // if the difference from humanGuess-secretTarget is less than or equal to computerGuess - secretTarget
 // return true 
 if (Math.abs(humanGuess - secretTarget) <= Math.abs(computerGuess - secretTarget)) {
   return true
 } else {
   return false
 }
}
// Checking if the number is between 0 and 9 , give an error if it's not --- doesnt work yet 
const invalidNumber = function () {
  if(humanGuess < 0 || humanGuess > 9) {
    alert('Invalid number please select a number between 0 and 9');
  }
}
// I created a function with winner parameter if winner = human than update his score, if winner = computer update computers score (+1)
const updateScore = function (winner) {
  if (winner === 'human') {
    humanScore++;
  } 
  if (winner === 'computer') {
    computerScore++;
  }
}
// created a function that will increase the current round number by 1 , starting a new round
const advanceRound = function () {
  return currentRoundNumber ++;
}
