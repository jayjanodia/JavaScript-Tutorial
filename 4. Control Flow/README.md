# Conditional Statements

## If...Else

```javascript
if (condition) {
  statement;
} else if (another_condition) {
  statement;
} else {
  statement;
}
```

## Switch...case

```javascript
switch (variable) {
  case "name":
    statement;
    break;
}
```

## Loops

### For

```javascript
for (initialExpression; condition; incrementExpression) {
  statement;
}
```

### While

- Difference with For Loops: the variable initially defined is not a part of the expression

```javascript
let i = 0; // defined initially itself

while (condition) {
  statement;
  i += 1;
}
```

### Do...While

- Always executed at least once, even if the while loop is false.

```javascript
do {
  statement;
} while (condition);
```

### For...in

- Used to iterate over the properties of an object

```javascript
const person = {
  name: "Jay",
  age: 26,
};

for (let k in person) {
  console.log(k, person.k);
}
```

### For...of

- Iterate over the elements or items of an array
- Introduced in ES6
- For...in takes iterations into consideration wrt lists, however you use for...of if you want to access the values directly

```javascript
const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index); // will return 0, 1, 2
}

for (let color of colors) {
  console.log(color); // will return red, green, blue
}
```

#### Break

- Allows to jump out of loops during runtime

```javascript
let i = 0;

while (i <= 10) {
  if (i === 5) break;

  console.log(i);
  i += 1;
}
// Will go uptil 5, and then stop
```

#### Continue

- Continues the loop but won't execute the code after it

```javascript
let i = 0;

while (i <= 10) {
  if (i % 2 === 0) {
    i += 1;
    continue;
  }

  console.log(i);
  i += 1;
}
// Will not stop executing the code even when the if statement runs, it will just prevent the rest of the code running for that iteration
```

#### Infinite Loop

- Loop keeps executing again and again till browser fails

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  // i+= 1. Commented results in i = 0 constantly executing
}
```
