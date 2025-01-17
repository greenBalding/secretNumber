let previousSecretNumbers = [];
let maxNumber = 100;
let guesses = 1;

/* BEFORE

alert("Olá, Ravi!");
let secretNumber = parseInt(Math.random() * maxNumber + 1);
console.log(secretNumber); // You can inspect the page to see the secret number before guessing.

*/

/* AFTER

let title = document.querySelector("h1");
title.innerHTML = "Olá, Ravi!"

let paragraph = document.querySelector("p");
paragraph.innerHTML = `Please choose a number between 0 and ${maxNumber}`;

*/

// AFTER 2.0

// lets creat a function that update HTML content

function tagAndText(tag, text){
    let area = document.querySelector(tag);
    area.innerHTML = text;
    responsiveVoice.speak(text, "UK English Female", {rate:1.1});
}

// initialize the page with a greeting and instructions
tagAndText("h1","Oi, Ravi!");
tagAndText("p",`Please choose a number between 0 and ${maxNumber}`);

// lets create a function that generate a random secret number
function randomSecretNumber(){
//    return parseInt(Math.random() * maxNumber + 1);
    let pickedSecretNumber = parseInt(Math.random() * maxNumber +1);
    let lengthPreviousSecretNumbers = previousSecretNumbers.length; // we are looking for how many numbers is there on our list of previous secret numbers.

    if (lengthPreviousSecretNumbers == maxNumber) {
        previousSecretNumbers = []; // clean it up the list if the list is full
    }
    
    if (previousSecretNumbers.includes(pickedSecretNumber)) {
        return randomSecretNumber();
    } else {
        previousSecretNumbers.push(pickedSecretNumber);
        return pickedSecretNumber;
    }
}

// lets call the secret number
let secretNumber = randomSecretNumber();

// lets creat a function that will check the user guesses and retur the messages
function checkGuess(){
    let guessNumber = parseInt(document.querySelector("input").value);
    let difference = Math.abs(secretNumber - guessNumber);

    // Validate if input is a number
    if (isNaN(guessNumber) || guessNumber < 0 || guessNumber > maxNumber) {
        tagAndText("h1", "Invalid input");
        tagAndText("p", "Please enter a valid number.");
        return;  // Stop the function if input is not valid
    }
        
    if (guessNumber == secretNumber){

        tagAndText("h1", "🎉 YEY! You guessed it right!");
        let guessWord = guesses > 1 ? "guesses" : "guess";
        let messageGuessWord = `Congrats! The secret number is ${secretNumber}. You found it in ${guesses} ${guessWord}. 🏆`;
        tagAndText("p", messageGuessWord);

        document.getElementById("reload").removeAttribute("disabled");

    } else {
        let feedback = difference <= 10 ? "🔥 hot" : "❄️ cold";

        if (guessNumber < secretNumber) {
            tagAndText("h1", "Almost there!");
            tagAndText("p", `The secret number is bigger than ${guessNumber}, and you are ${feedback}.`);
        } else {
            tagAndText("h1", "Almost there!");
            tagAndText("p", `The secret number is smaller than ${guessNumber}, and you are ${feedback}.`);
        }
        
        guesses++; // increment the number of guesses
        cleanGuess();
    }   
}

// lets create a function for the initial messages to prevent from repetition
function initialMessages(){
    tagAndText("h1","Olá, Ravi!");
    tagAndText("p",`Please choose a number between 0 and ${maxNumber}`);
}

// lets create the function that will reload the game
function reloadGame(){

    secretNumber = randomSecretNumber();
    cleanGuess();
    guesses = 1;
    initialMessages();
    document.getElementById("reload").setAttribute("disabled", true);

}

// lets create a function thar erase the area where the user guess number is
function cleanGuess(){
    guessNumber = document.querySelector("input");
    guessNumber.value = "";
}

// // Create a loop to ask the user to guess the secret number
// while (guessNumber != secretNumber) {
//     // Ask the user for a number and convert it to an integer
//     guessNumber = parseInt(prompt(`Please choose a number between 0 and ${maxNumber}`), 10);

//     // Validate input
//     if (isNaN(guessNumber) || guessNumber < 0 || guessNumber > maxNumber) {
//         alert(`Please enter a valid number between 0 and ${maxNumber}.`);
//         continue; // Skip the rest of the loop and ask again
//     }

//     // Calculate the difference between the guess and the secret number
//     let difference = Math.abs(secretNumber - guessNumber);

//     // Compare the secret number with the user's guess
//     if (secretNumber == guessNumber) {
//         break; // Exit the loop if the guess is correct
//     } else {
//         let feedback = difference <= 10 ? "🔥 hot" : "❄️ cold";

//         // Provide feedback based on whether the guess is too high or too low
//         if (guessNumber > secretNumber) {
//             alert(`The secret number is smaller than ${guessNumber}, and you are ${feedback}.`);
//         } else {
//             alert(`The secret number is bigger than ${guessNumber}, and you are ${feedback}.`);
//         }

//         guesses++; // Increment the number of guesses
//     }
// }

// // Display the final message with correct grammar
// let guessWord = guesses > 1 ? "guesses" : "guess";
// alert(`🎉 YEY! You guessed it right! 🎉\nCongrats! The secret number is ${secretNumber}. You found it in ${guesses} ${guessWord}. 🏆`);