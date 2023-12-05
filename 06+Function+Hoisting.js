// Function Hoisting: The Javascript Interpreter hoists our function
// declarations to the top of the current scope 

console.log('result of areaofSquare: ', areaOfSquare(5));

function areaOfSquare(n) {
    return n * n;
};
