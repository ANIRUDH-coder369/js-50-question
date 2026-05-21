/*
Problem:
Sum all numeric values in an object

Input:
{a:10, b:20, c:'x', d:30}

Expected Output:
60

Explanation:
Sum only numeric values.
*/

// function solve() {
//   // Your code goes here
// }


const obj = { a: 10, b: 20, c: 'x', d: 30 }
// const obj = { a: 10, b: 20, c: 'x', d: 30, e: 'l' }
//  output = 60
//  sum only numeric values
// let x = 0

// for (const key in obj) {
//     // console.log(key);
//     // console.log(obj[key]);
//     if (obj[key] > 0) {
//         x = x + obj[key]
//     }
// }
// console.log(x);


// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// const x = Object.values(obj).reduce((sum, item) => typeof item === "number" ? sum + item : sum, 0)
// console.log(x);


let sum = 0
for (const key in obj) {
    if (typeof obj[key] === 'number') {
        sum += obj[key]
    }
}
console.log(sum);



