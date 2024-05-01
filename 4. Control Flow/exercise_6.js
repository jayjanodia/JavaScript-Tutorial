// Count number of truthy messages in an array

// List of Falsy values:
// undefined
// null
// ''
// false
// 0
// NaN

let array = [1, 2, 3]; // should return 3
array = [0, 1, 2, 3]; // should still return 3
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0
    for (let message of array) {
        if (message != false) count += 1; // Note that we need to use Lose Equality 
    }
    return count;
}

