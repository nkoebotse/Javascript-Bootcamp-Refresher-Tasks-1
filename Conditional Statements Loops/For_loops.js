// Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Print all even numbers between 1 and 20
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Calculate the sum of all numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum:", sum);

// Print each element of the array
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Find and print the largest number in the array
const numArray = [3, 7, 2, 5, 10, 6];
let maxNum = numArray[0];
for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > maxNum) {
        maxNum = numArray[i];
    }
}
console.log("Largest number:", maxNum);
