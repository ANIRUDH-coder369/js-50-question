/*
Problem:
Find index of first even number

Input:
[1,3,7,4,6]

Expected Output:
3

Explanation:
Return index of first even number.
*/

// function solve() {
//   // Your code goes here
// }

const arr = [1, 3, 7, 4, 6]
let x = 0
for (let i = 0; i < arr.length; i++) {
  if (x === 0) {
    if (arr[i] % 2 === 0) {
      x = x + 1
      return console.log(i);
    }
  }
}
// console.log(x);
