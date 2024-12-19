// Loops Exercise

// 1. Using a `for-in` loop:
// - Create an array of your five favorite movies or songs.
// - Use a `for-in` loop to log the index and the name of each movie/song.

let favoriteMovies = ["Inception", "Interstellar", "The Matrix", "Titanic", "Avatar"];
for (let index in favoriteMovies) {
    console.log("Movie " + index + " is: " + favoriteMovies[index]);
}


// 2. Iterating through an object with `for-in`:
// - Create an object to represent a car with properties like `brand`, `model`, and `year`.
// - Use a `for-in` loop to log each key-value pair.

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
};
for (let key in car) {
    console.log(key + ": " + car[key]);
}


// 3. Using a `while` loop:
// - Write a program that prints all even numbers between 0 and 20 using a `while` loop.

let i = 0;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log("Even number: " + i);
    }
    i++;
}


// 4. Using a `do-while` loop:
// - Write a program that asks the user to guess a secret number (use `prompt`).
// - Keep looping until the user guesses the correct number.

let secretNumber = 7;
let guess;
do {
    guess = prompt("Guess the secret number (between 1 and 10): ");
} while (parseInt(guess) !== secretNumber);
console.log("Congratulations! You guessed the secret number.");


// 5. Nested Loops:
// - Create a multiplication table (1 to 10) using nested `for` loops and print it.
for (let row = 1; row <= 10; row++) {
    let rowOutput = "";
    for (let col = 1; col <= 10; col++) {
        rowOutput += (row * col).toString().padStart(4, " ");
    }
    console.log(rowOutput);
}



