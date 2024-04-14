// VARIABLES

// Before ES6
var outdated_variable = "This is outdated, not good practice";
console.log(outdated_variable);

// After ES6
let my_name = "Jay";
console.log("my_name is: ", my_name);

// CONSTANTS

let interestRate = 0.3;
interestRate = 1;
console.log("Variable Interest Rate: ", interestRate); // Will return 1

const interestRateConstant = 0.3;
interestRate = 1;
console.log("Constant Interest Rate: ", interestRateConstant); // Will return 0.3

// PRIMITIVE TYPES
let name = "Jay"; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let selectedColor = null;

// DYNAMIC TYPING

console.log("Type of my_name: ", typeof my_name); // Should be a string
my_name = 5;
console.log("Type of my_name after converting to number: ", typeof my_name); // Should be a number
console.log("New my_name: ", my_name);

// OBJECTS

let person = {
  name: "Mosh",
  age: 30,
};

console.log("Object Person has: ", person);

// Dot Notation
person.name = "John";

// Bracket Notation
person["age"] = 30;

console.log(
  "Dot notation and bracket notation of the object: ",
  person["name"],
  person.age
);

// Bracket Notation can be used in a dynamic way
let selection = "name";
person[selection] = "Jay";

console.log("Dynamically defined name: ", person.name);

// ARRAYS
let selectColors = ["red", "blue"];
console.log("selectedColors: ", selectColors);
console.log("red: ", selectColors[0], "blue: ", selectColors[1]);

selectColors[2] = "green";
console.log("selectedColors with green: ", selectColors);

selectColors[1] = 1;
console.log("selectedColors with different datatype: ", selectColors);

function greet() {
  console.log("Hello World");
}

greet();
// Performing a task
function greet(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}

greet("Jane", "Doe");
greet("John", "Doe");

// Calculating a value
function square(number) {
  return number * number;
}
console.log(square(2));
