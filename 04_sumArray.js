/*
Problem:
Find the sum of all numbers in an array

Input:
[1, 2, 3, 4, 5]

Expected Output:
15

Explanation:
Add all elements of the array and return the sum.
*/

// function solve() {
//   // Your code goes here
// }

const arr = [1, 2, 3, 4, 5]
let x = 0

for (let i = 0; i < arr.length; i++) {
  x = x + arr[i]
}
console.log(x);


// //  inbuild
// const inbuild = () => {
//   return arr.reduce((sum, item) => sum + item, 0)
// }
