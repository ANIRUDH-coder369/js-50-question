/*
Problem:
Remove falsy values from array

Input:
[0,1,false,2,'',3]

Expected Output:
[1,2,3]

Explanation:
Filter out falsy values.
*/

// function solve() {
//   // Your code goes here
// }

const arr = [0, 1, false, 2, '', 3]
const x = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    x.push(arr[i])
  }
}
console.log(x);

