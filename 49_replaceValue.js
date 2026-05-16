/*
Problem:
Replace all occurrences of value

Input:
[1,2,2,3], 2 -> 5

Expected Output:
[1,5,5,3]

Explanation:
Replace all 2s with 5s.
*/

// function solve() {
//   // Your code goes here
// }

const arr = [1, 2, 2, 3]
const x = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    x.push(5)
  } else {
    x.push(arr[i])
  }
}
console.log(x);
