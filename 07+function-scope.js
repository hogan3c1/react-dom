// Function Scopes:

/* 

1. Variables in a function cannot be accessed from anywhere outside the function
(the variable is defined only in the scope of the function).

2. A function can access all variables and functions defined inside the scope in which 
it is defined.

*/

// these variables are in the global scope
const num1 = 20;
const num2 = 3;
const userName = "john";


// this function is defined also in the global scope
function multiply() {
    return num1 * num2;
}

// a nested function 

function getScore() {
    const num1 = 1;
    const num2 = 2;

    function add() {
        return `${userName} scored ${num1 + num2}`
    }

    return add();

}

console.log('global scope ex 1: ', multiply())
console.log('final scope example: ',getScore())