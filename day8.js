// Task 1
const name = "name";
const age = 20;
console.log(`Hi, I am ${name}, and I am ${age} years old.`)

// Task 2: Create a multi-line string using template literals and log it to the console.
console.log('task2:');
const multiLineString = `This is a multi-line string.
It spans multiple lines.
Using template literals.`;
console.log(multiLineString);

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
console.log('task3:');
const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log(`First: ${first}, Second: ${second}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
console.log('task4:');
const book = { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 };
const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
console.log('task5:');
const moreNumbers = [...numbers, 50, 60];
console.log(`New array: ${moreNumbers.join(", ")}`);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
console.log('task6:');
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum: ${sum(1, 2, 3, 4, 5)}`);

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
console.log('task7:');
const multiply = (a, b = 1) => a * b;
console.log(`Product (with 2 params): ${multiply(5, 2)}`);
console.log(`Product (with 1 param): ${multiply(5)}`);

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
console.log('task8:');
const createPerson = (name, age) => ({
    name,
    age,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
});
const person = createPerson("Bob", 25);
console.log(person);
console.log(person.greet());

// Task 9: Create an object with computed property names based on variables and log the object to the console.
console.log('task9:');
const propName = "dynamicProp";
const obj = {
    [propName]: "This is a dynamic property"
};
console.log(obj);