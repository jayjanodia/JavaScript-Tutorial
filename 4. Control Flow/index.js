// IF-ELSE

// Hour
// If hour is between 6am and 12 pm: Good morning!
// If hour is between 12 pm and 6 pm: Good afternoon!
// Otherwise: Good evening!

hour = 13;

if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good Evening!");
}

// SWITCH CASE

let role;

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

// FOR LOOP

for (let i = 1; i <= 5; i += 2) {
  console.log("Hello World", i);
}

for (let i = 5; i >= 1; i--) {
  if (i % 2 != 0) console.log(i);
}

// WHILE LOOP
console.log("While Loop");
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i += 1;
}

// DO-WHILE LOOP
console.log("Do-while loop");
i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i += 1;
} while (i <= 5);

// FOR-IN LOOP (NON-IDEAL)
const person = {
  name: "Jay",
  age: 26,
};

for (let k in person) {
  console.log(k, person[k]);
}

const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(colors[index]);
}

// BREAK AND CONTINUE
i = 0;

while (i <= 10) {
  if (i === 5) break;

  console.log(i);
  i += 1;
}

i = 0;

while (i <= 10) {
  if (i % 2 === 0) {
    i += 1;
    continue;
  }

  console.log(i);
  i += 1;
}
