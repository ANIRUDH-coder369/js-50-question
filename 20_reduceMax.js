/*
Problem:
Use reduce to find max

Input:
[2,8,4,6]

Expected Output:
8

Explanation:
Find maximum using reduce.
*/

// function solve() {
//   // Your code goes here
// }

const arr = [2, 8, 4, 6]
// let max = arr[0]
// const x = arr.reduce((item) => {
//   // console.log(item);
//   // console.log(arr[item]);
//   if (max < item) {
//     console.log(item);
//     max = 0 + item
//   }
// })
// console.log(max);
// console.log(x)

let y = arr[0]

const x = arr.reduce((max, item) => {
    // console.log(item);
    if (y < item) {
        y = 0 + item
    }
    return y

}, 0)
console.log(x);
// console.log(y);