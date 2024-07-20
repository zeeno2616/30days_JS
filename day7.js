// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
console.log('task1:')
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
console.log("Book details:", book);

// Task 2: Access and log the title and author properties of the book object.
console.log('task2:')
console.log("Title:", book.title, "| Author:", book.author);

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
console.log('task3:')
book.getTitleAndAuthor = function() {
    return `Title: ${this.title}, Author: ${this.author}`;
};
console.log("Book title and author:", book.getTitleAndAuthor());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
console.log('task4:')
book.updateYear = function(newYear) {
    this.year = newYear;
};
book.updateYear(2005);
console.log("Updated book object:", book);

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
console.log('task5:')
const library = {
    name: "City Library",
    books: [
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
        book // using the previously defined book object
    ]
};
console.log("Library object:", library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log('task6:')
console.log("Library name:", library.name);
const bookTitles = library.books.map(b => b.title).join(", ");
console.log("Book titles in library:", bookTitles);

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
console.log('task7:')
book.getTitleAndYear = function() {
    return `Title: ${this.title}, Year: ${this.year}`;
};
console.log("Book title and year:", book.getTitleAndYear());

// Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
console.log('task8:')
console.log("Book properties and values:");
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log('task9:')
console.log("Book keys:", Object.keys(book));
console.log("Book values:", Object.values(book));