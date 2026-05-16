/*
Problem:
Sort numbers descending

Input:
[5,3,8,1]

Expected Output:
[8,5,3,1]

Explanation:
Sort array from high to low.
*/

// function solve() {
//   // Your code goes here
// }

const arr = [1, 2, 3, 4]
let y = arr[0]
const x = []
for (let i = 0; i < arr.length; i++) {
  if (y < arr[i]) {
    x.unshift(arr[i])

    // x.unshift(y)
  }
  // if (y < arr[i]) {
  // x.push(y)
  //   x.push(y)
  //   // x.push(arr[i])
  // }
}
console.log(x);