/*
Problem:
Remove specific element from array

Input:
[1,2,3,4,5], 3

Expected Output:
[1,2,4,5]

Explanation:
Remove given element.
*/

// function solve() {
//   // Your code goes here
// }

const arr = [1, 2, 3, 4, 5]
const x = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    console.log('false');
  } else {
    x.push(arr[i])
  }
}
console.log(x);
