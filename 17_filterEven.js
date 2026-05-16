/*
Problem:
Use filter to get even numbers

Input:
[1,2,3,4,5,6]

Expected Output:
[2,4,6]

Explanation:
Filter even elements.
*/

// function solve() {
//   // Your code goes here
// }

const arr = [1, 2, 3, 4, 5, 6]

const x = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    x.push(arr[i])
  }
}
console.log(x);

