/*
Problem:
Invert keys and values

Input:
{a:1,b:2}

Expected Output:
{1:'a',2:'b'}

Explanation:
Swap keys and values.
*/

// function solve() {
//   // Your code goes here
// }
const obj = { a: 1, b: 2 }
const x = {}
for (const key in obj) {
  x[obj[key]] = key
}
console.log(x);

