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
