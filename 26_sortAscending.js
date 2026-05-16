/*
Problem:
Sort numbers ascending

Input:
[5,3,8,1]

Expected Output:
[1,3,5,8]

Explanation:
Sort array from low to high.
*/

// function solve() {
//   // Your code goes here
// }


const arr = [5, 3, 8, 1]
let y = arr[0]
const x = []
for (let i = 0; i < arr.length; i++) {
  if (y > arr[i]) {
    x.unshift(arr[i])
    // x.unshift(y)
  }
  if (y < arr[i]) {
    x.push(y)
    x.push(arr[i])
  }
}
console.log(x);
