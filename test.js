// JavaScript program for a simple calculator

// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    if (num2 === 0) {
        console.log("Cannot divide by zero");
        return null;
    } else {
        return num1 / num2;
    }
}

// Main function to operate the calculator
function calculator(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        default:
            console.log("Invalid operation");
            return null;
    }
}

// Example usage
console.log(calculator('add', 5, 3)); // 8
console.log(calculator('subtract', 10, 5)); // 5
console.log(calculator('multiply', 4, 6)); // 24
console.log(calculator('divide', 20, 4)); // 5
console.log(calculator('divide', 20, 0)); // Cannot divide by zero, null

const assert = require('assert');

// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Test cases for the add function
const addTestCases = [
    { num1: 5, num2: 3, expected: 8 },
    { num1: -1, num2: -1, expected: -2 },
    { num1: 0, num2: 0, expected: 0 },
    { num1: 100, num2: 200, expected: 300 },
    { num1: -50, num2: 50, expected: 0 }
];

// Function to test the add function
function testAdd() {
    addTestCases.forEach(({ num1, num2, expected }, index) => {
        try {
            assert.strictEqual(add(num1, num2), expected);
            console.log(`Test ${index + 1}: Passed`);
        } catch (error) {
            console.error(`Test ${index + 1}: Failed. Expected ${expected}, got ${add(num1, num2)}`);
        }
    });
}

// Execute the tests
testAdd();

const assert = require('assert');

// Test cases for the calculator function
const calculatorTestCases = [
    { operation: 'add', num1: 5, num2: 3, expected: 8 },
    { operation: 'subtract', num1: 10, num2: 5, expected: 5 },
    { operation: 'multiply', num1: 4, num2: 6, expected: 24 },
    { operation: 'divide', num1: 20, num2: 4, expected: 5 },
    { operation: 'divide', num1: 20, num2: 0, expected: null }, // Testing divide by zero
    { operation: 'add', num1: -1, num2: -1, expected: -2 },
    { operation: 'invalid', num1: 5, num2: 3, expected: null } // Testing invalid operation
];

// Function to test the calculator function
function testCalculator() {
    calculatorTestCases.forEach(({ operation, num1, num2, expected }, index) => {
        try {
            assert.strictEqual(calculator(operation, num1, num2), expected);
            console.log(`Test ${index + 1} for operation ${operation}: Passed`);
        } catch (error) {
            console.error(`Test ${index + 1} for operation ${operation}: Failed. Expected ${expected}, got ${calculator(operation, num1, num2)}`);
        }
    });
}

// Execute the tests
testCalculator();
