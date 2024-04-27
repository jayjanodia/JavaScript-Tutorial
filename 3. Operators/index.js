// COMPARISON
let x = 1;

// Relational
console.log(x > 0); // Boolean, will return true
console.log(x >= 0); // Boolean, will return true again
console.log(x < 1); // Boolean, will return false
console.log(x <= 1); // Boolean, will return true

// Equality
console.log(x === 1); // Checks for equality, will return true 
console.log(x !== 1); // Checks for inequality, will return false

console.log(x === '1'); // Will return false
console.log(x == '1'); // Will return true

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type)

// LOGICAL AND (&&)
console.log(true && false); // should return false

let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

let eligibleForLoanOR = highIncome || goodCreditScore;
console.log(eligibleForLoanOR)


let user_color = "red";
let default_color = "blue";
let current_color = user_color || default_color;
console.log(current_color);
user_color = undefined;
current_color = user_color || default_color;
console.log(current_color);

// BITWISE OPERATORS
// ACCESS CONTROL SYSTEM: Read, Write, Execute
// If user has permission it's 1 or 0
// Read: 00000100
// Write:00000010
//Execute00000001

const read_permission = 4; // decimal representation of read
const write_permission = 2; // decimal representation of write
const exec_permission = 1; // decimal representation of execute

let my_permission = 0; // current permissions
my_permission = my_permission | read_permission | write_permission;

let message = (my_permission & exec_permission) ? 'execute permission granted' : 'no execute permission';

console.log(message);

x = 10;
let y = x++;
console.log(y);
console.log(x);


// Exercise
let a = "red";
let b = "blue";

// Swap the two variables
let temp = a;
a = b;
b = temp;

console.log("Values after swapping: ");
console.log("Should give 'blue': ", a);
console.log("Should give 'red': ", b);