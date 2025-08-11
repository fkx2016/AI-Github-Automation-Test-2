/**
 * Main entry point for AI GitHub Automation Test #2
 * This module exports a simple function for testing purposes.
 */

/**
 * A simple function that returns a greeting message
 * @param {string} name - The name to greet
 * @returns {string} A greeting message
 */
function greet(name = 'World') {
  return `Hello, ${name}! Welcome to AI GitHub Automation Test #2!`;
}

/**
 * A simple function that adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * A simple function that checks if a number is even
 * @param {number} num - Number to check
 * @returns {boolean} True if number is even, false otherwise
 */
function isEven(num) {
  return num % 2 === 0;
}

// Export functions for use in tests
module.exports = {
  greet,
  add,
  isEven
};

// If this file is run directly, demonstrate the functions
if (require.main === module) {
  console.log(greet());
  console.log(greet('Developer'));
  console.log(`2 + 3 = ${add(2, 3)}`);
  console.log(`4 is even: ${isEven(4)}`);
  console.log(`5 is even: ${isEven(5)}`);
}
