# Basic concepts of JavaScript

## Variables

- We use a variable to store data temporarily in a computer's memory
- Few rules for naming variables

  1. Cannot be a reserved keyword `if, let, var etc`
  2. Should be meaningful names `my_name, addition`
  3. Cannot start with a number `1name`
  4. Cannot contain a space or hyphen `-`
  5. Are case-sensitive
  6. You could define multiple variables in one line `let first_num = 1, second_num = 2`. However, this is not considered good practice. You might want to define them on different lines

  ```javascript
  let first_num = 1;
  let second_num = 2;
  ```

  7. `var` is not used anymore since it's a bad practice and can break the code

  ```javascript
  // Gives an error since a is not defined
  console.log(a);
  let a = 5;

  // Won't return an error. Will return 'undefined' instead
  console.log(b);
  var b = 5;
  ```

  JavaScript reads variables first before anything else, so in the above example,

  ```javascript
  console.log(b);
  var b = 5;
  ```

  becomes

  ```javascript
  var b;
  console.log(b); // returns undefined since b is undefined
  b = 5;
  ```

> **_NOTE:_** Generally Java and JavaScript use camelCase, so for example `let firstName`. However, I'm used to Python's snake_case `first_name`, so you might find a lot of my examples with snake_case being used instead of camelCase.

## Constants

- You can redefine variables. However, in the real world there are some situations where you don't want the value of a variable to change. In that case, you use a constant

## Primitive Types

- Also called Value Types
  - String
  - Number
  - Boolean
  - Undefined
  - Null. Used in situations where we want to clear the value of the variable. Example, user has the option to select a color. Initially color can be set to null and when user picks a color the variable can become that color.

## Dynamic Typing

- JavaScript is a dynamic-typed language
- The type of a variable can be changed at runtime

## Reference Types

### Object

- An object has properties
- When we have multiple, related variables, we can place them inside an object
- Instead of defining various variables, we can place them in a single object and call that object
- The syntax within curly braces is called object literal

### Array

- Array is an object used to store list of objects
- The type of variables can change at runtime. This includes the lengths of the arrays and the objects of the arrays.

### Function

- Fundamental building blocks of JavaScript
- Set of statements that perform a task or calculate a value
- Functions have inputs and inputs change how the function behaves
- The function has parameters, while arguments are the actual values that we supply for the parameter
- An application is 1000s of functions working together to provide the functionality of that application

#### Types of Functions

1. Function that calculates a value

```javascript
function square(number) {
  return number * number;
}

console.log(square(2));
```

2. Performs a specific task

```javascript
function greet(first_name, last_name) {
  console.log("Hello" + first_name + " " + last_name);
}

greet("John", "Doe");
```
