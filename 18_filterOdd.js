/*
Problem:
Use filter to get odd numbers

Input:
[1,2,3,4,5,6]

Expected Output:
[1,3,5]

Explanation:
Filter odd elements.
*/

// function solve() {
//   // Your code goes here
// }


const arr = [1, 2, 3, 4, 5, 6]

const x = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    x.push(arr[i])
  }
}
console.log(x);