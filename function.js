// Assignment 1 (function that checks if the input/parameter is an even number)

function isEven(number) {
    return number % 2 === 0;
}
let result = isEven(8);
console.log(result);

// Assignment 2 (function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter)

function printNumbersInRange(n1, n2) {
    for (let i = n1; i <= n2; i++) {
        console.log(i);
    }
}
printNumbersInRange(1, 5);


// Assignment 3 (function that sum the values in-between two numbers)

function sumBetween(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumBetween(3, 5));


