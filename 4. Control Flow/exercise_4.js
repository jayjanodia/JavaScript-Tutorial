// Write a program for traffic speed control
// Speed Limit -> 70
// For each extra 5, give 1 point
// If >12 points, suspend license

function checkSpeed(speed) {
    // Workaround: Since >12 points, suspend license, we can hard code that if speed limit > 70 + (5*12) = 130, suspend license
    // This will save on runtime
    // Alternatively, check if speed is greater than 70, if yes start calculating points. In the end, if points > 12, then suspend
    if (speed >= 130) {
        return "License Suspended";
    }
    // Base case: If speed < 70, then return "Ok"
    const speed_limit = 70;
    const pointsPerSpeed = 5;
    if (speed <= speed_limit) {
        return "Ok";
    }
    // Point calculation
    const points = Math.floor((speed - speed_limit) / pointsPerSpeed);
    return (points > 0) ? "Points: " + points : "Ok";
}

console.log(checkSpeed(50)); // Ok
console.log(checkSpeed(70)); // Ok
console.log(checkSpeed(75)); // Points: 1
console.log(checkSpeed(72)); // Ok
console.log(checkSpeed(80)); // Points: 2
console.log(checkSpeed(180)); // Suspended