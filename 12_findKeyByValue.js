/*
Problem:
Find key by value in object

Input:
{a:1, b:2, c:3}, value=2

Expected Output:
'b'

Explanation:
Return key whose value matches given value.
*/

// function solve() {
//   // Your code goes here
// }

const obj = { a: 1, b: 2, c: 3 }

for (const key in obj) {
  if (obj[key] === 2) {
    console.log(key);

  }
}
// console.log(key);
