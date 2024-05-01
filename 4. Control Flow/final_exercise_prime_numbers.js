// Show primes upto a specific limit

showPrimes(20);

/* function showPrimes(limit) {
    if (limit == 0 || limit == 1) return limit;
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(i);
    }
} */

function showPrimes(limit) {
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) console.log(i);
  }
}

function isPrime(i) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0) return false;
  }
  return true;
}
