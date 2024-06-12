// Print numbers from 1 to 10
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

// Calculate the sum of all numbers from 1 to 100
let sum = 0;
let j = 1;
do {
    sum += j;
    j++;
} while (j <= 100);
console.log("Sum:", sum);

// Prompt user to enter a number greater than 10
let number;
do {
    number = prompt("Enter a number greater than 10:");
} while (number <= 10);

// Simple guessing game
const correctNumber = 7;  // You can set any number here
let guess;
do {
    guess = prompt("Guess a number between 1 and 10:");
} while (parseInt(guess) !== correctNumber);
console.log("Correct! You guessed the number.");
