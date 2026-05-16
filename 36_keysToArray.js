/*
Problem:
Convert object keys to array

Input:
{a:1,b:2}

Expected Output:
['a','b']

Explanation:
Return keys as array.
*/

// function solve() {
//   // Your code goes here
// }

const obj = { a: 1, b: 2 }
const x = []
for (const key in obj) {
  x.push(key)
}
console.log(x);

