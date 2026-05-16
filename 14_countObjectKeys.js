/*
Problem:
Count number of keys in an object

Input:
{a:1,b:2,c:3}

Expected Output:
3

Explanation:
Return total count of properties.
*/

// function solve() {
//   // Your code goes here
// }

const obj = { a: 1, b: 2, c: 3 }
let x = 0
for (const key in obj) {
  x = x + 1
}
console.log(x);
