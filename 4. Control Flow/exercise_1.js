// Write a function that takes two numbers and returns the maximum of the two

console.log(maximum(5, 6));

function maximum(num1, num2) {
    return (num1 > num2) ? num1 : num2;
    // OR:
    if (num1 > num2) return num1;
    else return num2;
}
