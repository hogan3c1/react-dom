// Learn about Function Expressions

// A Function expression can be anonymous and does not
// need to have a name

// Function expressions are helpful when passing a function as an argument to another
// function 

// create a javascript function that maps functions to each element of an array and
// returns a new array and provide a cube function which will then transform each result in the
// array as cubed (ex cubed = x * x * x)

// arr = [1,2 3,4]

function map(func, arr) {
    const result = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i]);
    }
    return result; 
}

const cube = function (x) {
   return x * x * x; 
}

const squared = function (x) {
    return x * x; 
 }

const multByFive = function (x) {
    return x * 5; 
 }

const numberArr = [0,1,2,3,4];

console.log('function map expression: ', map(cube, numberArr));

const square = function (number) {
    return number * number;
}

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
}

// in math a factorial is the product of all positive integers
// from 1 to n ex: find the factorial of 3 = 3 * 2 * 1 = 6
// ex2: find the factorial of 4 = 4 * 3 * 2 * 1 = 24

console.log('factorial example: ', factorial(4));
console.log('square area example: ', square(5));