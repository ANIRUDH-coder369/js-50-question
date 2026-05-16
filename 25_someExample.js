/*
Problem:
Check if any number is negative

Input:
[1,2,-3,4]

Expected Output:
true

Explanation:
Return true if any element is negative.
*/

// function solve() {
//   // Your code goes here
// }

const arr = [1, 2, -3, 4]

let x = 0

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    x = x + arr[i]
  }
}
console.log(x);

