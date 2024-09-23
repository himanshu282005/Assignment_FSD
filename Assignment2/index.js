// 1. String Concatenation
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("John", "Doe"));  // Example call

// 2. If-Else Statements
function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
checkNumber(5);  // Example call

// 3. Loops
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 4. Functions
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice");  // Example call

// 5. Arrays
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum of array:", sum);
