/*
Problem:
Sum only even numbers in array

Input:
[1,2,3,4,5,6]

Expected Output:
12

Explanation:
Add even numbers only.
*/

// function solve() {
//   // Your code goes here
// }
const arr = [1, 2, 3, 4, 5, 6]
let x = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    x = x + arr[i]
  }
}

console.log(x);

