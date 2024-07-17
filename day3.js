// Task 1: Check if a number is positive, negative, or zero
let number = 10;
if (number > 0) {
    console.log("Number is positive");
} else if (number < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

// Task 2: Check if a person is eligible to vote
let age = 20;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// Task 3: Find the largest of three numbers using nested if-else
let num1 = 5, num2 = 10, num3 = 8;
if (num1 >= num2) {
    if (num1 >= num3) {
        console.log("Largest number is", num1);
    } else {
        console.log("Largest number is", num3);
    }
} else {
    if (num2 >= num3) {
        console.log("Largest number is", num2);
    } else {
        console.log("Largest number is", num3);
    }
}

// Activity 3: Switch Case

// Task 4: Determine the day of the week based on a number
let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";
}

console.log(dayName);

// Task 5: Assign a grade based on a score
let score = 85;
let grade;
switch (true) {
    case (score >= 90): grade = 'A'; break;
    case (score >= 80): grade = 'B'; break;
    case (score >= 70): grade = 'C'; break;
    case (score >= 60): grade = 'D'; break;
    default: grade = 'F';
}
console.log("Grade is", grade);

// Task 6: Check if a number is even or odd
let num = 7;
console.log(num % 2 === 0 ? "Even" : "Odd");

// Task 7: Check if a year is a leap year
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}
