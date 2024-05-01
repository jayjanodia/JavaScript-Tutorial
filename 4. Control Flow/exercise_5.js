// Display even and odd numbers upto a specific limit and specify if they are even or odd

console.log(showNumbers(10));

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message =
      i % 2 === 0 ? console.log(i, "EVEN") : console.log(i, "ODD");
    // if (i % 2 === 0) console.log(i, "EVEN");
    // else console.log(i, "ODD");
  }
  return;
}
