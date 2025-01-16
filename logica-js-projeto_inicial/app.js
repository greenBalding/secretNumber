alert("Olá, Ravi!");

let maxNumber = 1000
let secretNumber = parseInt(Math.random() * maxNumber + 1);
console.log(secretNumber); // You can inspect the page to see the secret number before guessing.
let guessNumber;
let guesses = 1;

// Create a loop to ask the user to guess the secret number
while (guessNumber != secretNumber) {
    // Ask the user for a number and convert it to an integer
    guessNumber = parseInt(prompt(`Please choose a number between 0 and ${maxNumber}`), 10);

    // Validate input
    if (isNaN(guessNumber) || guessNumber < 0 || guessNumber > maxNumber) {
        alert(`Please enter a valid number between 0 and ${maxNumber}.`);
        continue; // Skip the rest of the loop and ask again
    }

    // Calculate the difference between the guess and the secret number
    let difference = Math.abs(secretNumber - guessNumber);

    // Compare the secret number with the user's guess
    if (secretNumber == guessNumber) {
        break; // Exit the loop if the guess is correct
    } else {
        let feedback = difference <= 10 ? "🔥 hot" : "❄️ cold";

        // Provide feedback based on whether the guess is too high or too low
        if (guessNumber > secretNumber) {
            alert(`The secret number is smaller than ${guessNumber}, and you are ${feedback}.`);
        } else {
            alert(`The secret number is bigger than ${guessNumber}, and you are ${feedback}.`);
        }

        guesses++; // Increment the number of guesses
    }
}

// Display the final message with correct grammar
let guessWord = guesses > 1 ? "guesses" : "guess";
alert(`🎉 YEY! You guessed it right! 🎉\nCongrats! The secret number is ${secretNumber}. You found it in ${guesses} ${guessWord}. 🏆`);