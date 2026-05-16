/*
Problem:
Find first number greater than 10

Input:
[5,8,12,3]

Expected Output:
12

Explanation:
Return first element matching condition.
*/

// function solve() {
//   // Your code goes here
// }

const arr = [5, 8, 12, 3, 20]

let x = 0

for (let i = 0; i < arr.length; i++) {
  if (x === 0) {
    if (arr[i] > 10) {
      x = x + arr[i]
    }
  }
}
console.log(x);
