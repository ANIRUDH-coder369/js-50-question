/*
Problem:
Find index of element in array

Input:
[10,20,30,40], 30

Expected Output:
2

Explanation:
Return index if found, else -1.
*/

// function solve() {
//   // Your code goes here
// }

const arr = [10, 20, 30, 40]

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 30) {
    return console.log(i);
  }
}