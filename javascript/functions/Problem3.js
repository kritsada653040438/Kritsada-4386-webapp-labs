
function calculator(num1, num2,Callback) {
    return Callback(num1, num2);
}



// Addition function
function add(a, b) {
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Division function
function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero is not allowed.';
    }
    return a / b;
}



console.log(calculator(5, 3, add));       // Output: 8
console.log(calculator(5, 3, subtract));  // Output: 2
console.log(calculator(5, 3, multiply));  // Output: 15
console.log(calculator(6, 3, divide));    // Output: 2

