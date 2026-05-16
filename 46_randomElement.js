/*
Problem:
Return random element from array

Input:
[1,2,3,4,5]

Expected Output:
Any element

Explanation:
Pick random array element.
*/

// function solve() {
//   // Your code goes here
// }

const arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    console.log(arr[i]);
  }
}