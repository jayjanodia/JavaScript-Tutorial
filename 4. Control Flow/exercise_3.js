// Write a code for Fizzbuzz: if number is divisible by 3 pass Fizz, if number is divisible by 5 pass Buzz, if the number is divisible by both 3 and 5 we get FizzBuzz
// If the number is anything else return the number
// If the input is not a number, return "Not a Number"

function fizzBuzz(input) {
  if (typeof input != "number") {
    return NaN;
  }
  if (input % 5 === 0 && input % 3 === 0) {
    return "FizzBuzz";
  } else if (input % 3 === 0) {
    return "Fizz";
  } else if (input % 5 === 0) {
    return "Buzz";
  } else {
    return input;
  }
}

const constant = fizzBuzz("input");
console.log(constant);
