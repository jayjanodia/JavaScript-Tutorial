# Operators

- They are used along side variables and constants to create expressions
- With these expressions we can implement logic and algorithms

## Types of Operators

### Arithmetic
#### Addition
- Take two operands and produce a new value
```javascript
let x = 10;
let y = 3;
console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Modulo
console.log(x ** y); // Exponentiation

// Increment (++)
console.log(x++); // Will first print and then increment (print 10, then increment to 11)
x = 10;
console.log(++x); // Will first increment and then print (print 11 directly, x has already been incremented before)

// Decrement (--)
console.log(--x); // Will print 10 directly

```

### Assignment
```javascript
let x = 10;
x += 5; // Increments x to 15
x -= 5;
x *= 5;
x /= 5;
x %= 5;
```

### Comparison
- Use this to compare the value of a variable with something else

```javascript
let x = 1;
console.log(x > 0);
console.log(x >= 0);
console.log(x < 1);
console.log(x <= 1);
```

#### Equality
- Checks for equality or inequality

##### Strict Equality. Checks for type of variable as well
```javascript
console.log(1 === 1);
```

##### Lose Equality. Does not check for type of variable
```javascript
console.log(1 == 1);
```

We should use Strict Equality because it is more precise and accurate

#### Ternary
Represented by a `?`
- Let's say you have a customer. If the customer has more than 100 points, they are a gold customer. Else, they are a silver customer
```javascript
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
```

### Logical
#### AND
- Represented by &&
- Returns true if both operands are true
```javascript
console.log(true && false); // returns false
```

#### OR
- Represented by ||
- Returns true if one of the operands is true
```javascript
console.log(true or false) // returns true
```
#### NOT
- represented by !
- Converts to the opposite boolean

#### WITH NON BOOLEANS
##### Falsy (False Values)
- undefined
- null
- 0
- false
- ''
- NaN

##### Truthy (Anything that is not falsy)
##### Short-circuiting
- In an OR statement, the moment the code finds a truthy value it stops
```javascript
false || 1 || 2 // Returns 1
// Code initially sees false so it continues
// When it comes to a truthy value (1) it stops executing
```

### Bitwise
- Numbers in computers are stored in binary format (0 and 1)
- 1 is represented by 8 bits, 00000001
- 2 is represented by 8 bits, 00000010
- Similar to logical operators but operate on bits
- console.log(1 | 2); // Bitwise OR
- console.log(1 & 2); // Bitwise AND
- 1 = 00000001
- 2 = 00000010
- R = 00000011 // On performing bitwise OR
- R = 00000000 // On performing bitwise AND

## Precendence of Operators
- Follows **BODMAS** principle
