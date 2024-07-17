// Task 1: Print numbers from 1 to 10
let output = '';
for (let i = 1; i <= 10; i++) {
    output += i + ' ';
}
console.log("Task 1:", output.trim());

// Task 2: Print the multiplication table of 5
output = '';
for (let i = 1; i <= 10; i++) {
    output += `5*${i}=${5*i} `;
}
console.log("Task 2:", output.trim());

// Task 3: Calculate the sum of numbers from 1 to 10
let sum = 0, num = 1;
while (num <= 10) {
    sum += num;
    num++;
}
console.log("Task 3: Sum from 1 to 10 =", sum);

// Task 4: Print numbers from 10 to 1
output = '';
let count = 10;
while (count >= 1) {
    output += count + ' ';
    count--;
}
console.log("Task 4:", output.trim());

// Task 5: Print numbers from 1 to 5
output = '';
let n = 1;
do {
    output += n + ' ';
    n++;
} while (n <= 5);
console.log("Task 5:", output.trim());

// Task 6: Calculate the factorial of a number
let factorial = 1, number = 5, i = 1;
do {
    factorial *= i;
    i++;
} while (i <= number);
console.log("Task 6: Factorial of 5 =", factorial);

// Task 7: Print a pattern using nested for loops
let rows = 5;
console.log("Task 7:");
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}

// Task 8: Print numbers from 1 to 10, but skip the number 5
output = '';
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    output += i + ' ';
}
console.log("Task 8:", output.trim());

// Task 9: Print numbers from 1 to 10, but stop the loop when the number is 7
output = '';
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    output += i + ' ';
}
console.log("Task 9:", output.trim());
