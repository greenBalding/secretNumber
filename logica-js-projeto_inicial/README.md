Secret Number Game

    This is a simple implementation of a "Guess the Secret Number" game, where players try to guess a randomly generated number between 1 and a user-defined maximum number. The game gives feedback using "hot" or "cold" based on how close the guess is to the secret number.

A. Features

    1. Interactive Gameplay: Players input guesses through prompts, and the game gives feedback on whether they are close (hot) or far (cold).
    2. Random Secret Number: The secret number is randomly generated between 1 and the user-defined maximum number (maxNumber).
    3. Hot and Cold Feedback: Players receive hints after each guess to help them find the secret number faster.
    4. Input Validation: The game ensures the input is a valid number within the specified range.
    5. Customizable Range: The upper limit of the number range can be set by the user through the maxNumber variable in the code.
    6. Celebratory Message: Once the player guesses correctly, they get a congratulatory message with the number of attempts it took.

B. How to Play

    1. Open index.html in your browser.
    2. The game will prompt you to guess a number between 1 and the value specified by the maxNumber variable in the JavaScript code.
    3. Based on your guesses, you will receive feedback:
        🔥 Hot: If you are very close to the secret number.
        ❄️ Cold: If your guess is far from the secret number.
    4. Keep guessing until you find the secret number!

C. Installation

    1. Clone the repository to your local machine:

        git clone https://github.com/greenBalding/secretNumber.git

    2. Navigate to the project directory:

        cd secretNumber

    3. Open index.html in any browser to start playing the game!

D. How to Set the Range

    You can adjust the range of numbers by editing the maxNumber variable in the JavaScript code. This will define the upper limit of the number that the player needs to guess.

    For example, to set the range between 1 and 500, modify the maxNumber like this:

        let maxNumber = 500;

E. Technologies Used

    1. HTML: Structure of the game interface.
    2. CSS: Basic styling for elements in the HTML file.
    3. JavaScript: Game logic, user input handling, and feedback system.