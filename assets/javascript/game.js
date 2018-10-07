// defining Greeting 

// Defining Variable
let wins = 0; // initial value of variable wins is Zero 
let losses = 0; // initial value of variable wins is Zero 
let guesses = 9; // Number of guesses value 
let guessesleftchoice = 9 ; 
let LettersGuess = []; // empty array assingned to guesseletters
var letterToGuess = null;

// Greeting Player Name 
function Greeting() {
    var person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById('greet').innerHTML =
            "Hello " + person + "! Goodluck!";
    }
}
// Letter alphabets Arrays for Computer to choose 

var computerSelection = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Random ComputerGuessLetter 

var computerguess = computerSelection[Math.floor(Math.random() * computerSelection.length)];

//console.log(computerguess);

//Allows the user 9 guesses

function updateGuessesLeft() {
    document.querySelector('#guessLeft').innerHTML = "Your Guess Left: " + guessesleftchoice;
};

//function for updateLettertoGuess
function updateLetterToGuess() {
    this.letterToGuess = this.computerSelection[Math.floor(Math.random() * this.computerSelection.length)];};

function updateGuesssSofar() {
    document.querySelector('#yourguess').innerHTML = "Your Guess so Far: " + LettersGuess.join(',');
};

//When key is released it becomes the users guess
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerSelection.includes(userGuess);

    if (check === false) {
        alert("Guess Something Else ?");
        return false;
    } else if (check === true) {
        //update the guessleftchoice and add to array of LetterGuess
        guessesleftchoice--;
        LettersGuess.push(userGuess);
        updateGuessesLeft();
        updateGuesssSofar();

        if (guessesleftchoice > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                alert("Yes, you have guessed Right! Computer Letter: " + userGuess);
                reset();
            }
        } else if (guessesleftchoice == 0) {
            // Then we will loss and we'll update the html to display the loss
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you lost, try again?");
            
            // Then we'll call the reset.
            reset();
        }
        return false;
    } else {
        alert("Something is missing ! ");
    }

};
// Reset once user reach to Your Guess Left to = 9 ;
var reset = function () {
    totalGuesses = 9;
    guessesleftchoice = 9;
    LettersGuess = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuesssSofar();
}

updateLetterToGuess();
updateGuessesLeft();


