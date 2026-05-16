/*
Problem:
Convert object to key-value pairs

Input:
{a:1,b:2}

Expected Output:
[['a',1],['b',2]]

Explanation:
Return entries of object.
*/

// function solve() {
//   // Your code goes here
// }

const obj = { a: 1, b: 2 }
let x = []
const result = []

for (const key in obj) {
  if (x.length === 0) {
    x.push(key)
    x.push(obj[key])
    result.push(x)
    console.log(x);
    x = []
  }
  // if (x.length === 1) {
  //   x.push(key)
  //   x.push(obj[key])
  //   result.push(x)
  //   console.log(x);

  //   // x = []
  // }
}
console.log(result);
console.log(x);


