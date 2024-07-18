// Task 1: Check if a number is even or odd
function checkEvenOdd(number) {
    console.log(number, number % 2 === 0 ? "is even" : "is odd");
}
checkEvenOdd(4);
checkEvenOdd(7);

// Task 2: Calculate the square of a number
function square(number) {
    return number * number;
}
console.log("Square of 5:", square(5));

// Task 3: Find the maximum of two numbers
const findMax = function(a, b) {
    console.log(`Max of ${a} and ${b} is`, a > b ? a : b);
};
findMax(10, 15);

// Task 4: Concatenate two strings
const concatenate = function(str1, str2) {
    return str1 + str2;
};
console.log("Concatenation of 'Hello' and 'World':", concatenate("Hello", " World"));

// Task 5: Calculate the sum of two numbers
const sum = (a, b) => a + b;
console.log("Sum of 5 and 7:", sum(5, 7));

// Task 6: Check if a string contains a specific character
const containsChar = (str, char) => str.includes(char);
console.log("Does 'JavaScript' contain 'S'?", containsChar("JavaScript", "S"));

// Task 7: Return the product of two numbers, with a default value for the second parameter
const product = (a, b = 1) => a * b;
console.log("Product of 4 and 5:", product(4, 5));
console.log("Product of 4 with default parameter:", product(4));

// Task 8: Return a greeting message with a default age
const greet = (name, age = 18) => `Hello, ${name}! You are ${age} years old.`;
console.log(greet("Alice"));
console.log(greet("Bob", 25));

// Task 9: Call a function a specific number of times
const callFunctionNTimes = (fn, times) => {
    for (let i = 0; i < times; i++) fn();
};
const sayHello = () => console.log("Hello!");
callFunctionNTimes(sayHello, 3);

// Task 10: Apply two functions to a value
const applyFunctions = (fn1, fn2, value) => fn2(fn1(value));
const addTen = num => num + 10;
const multiplyByTwo = num => num * 2;
console.log("Result of applying functions:", applyFunctions(addTen, multiplyByTwo, 5));
