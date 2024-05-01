// Dispaly stars for each limit
// EG: 5 would be:
// *
// **
// ***
// ****
// *****

showStars(10);

function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let string = "";
        for (let j = 0; j < i; j++)
            string += "*";
        console.log(string);
    }
}