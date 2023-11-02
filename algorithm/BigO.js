// // Q1
// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i < n; i++) {
//         total += i;
//     }
//     return total;
// } // = 15

// Q2
function addUpTo(n) {
    return n * (n + 1) / 2;
} // = 21

console.log(addUpTo(6));

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);