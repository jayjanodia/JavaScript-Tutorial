// Calculate the sum of all multiples of 3 and 5 uptil a limit

console.log(sum(10)); // output should be 3 + 5 + 6 + 9 + 10 = 33

function sum(limit) {
  let total = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }

  return total;
}
