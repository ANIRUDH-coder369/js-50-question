/*
Problem:
Merge two objects

Input:
{a:1, b:2}, {b:3, c:4}

Expected Output:
{a:1, b:3, c:4}

Explanation:
Combine two objects. Second object overrides duplicate keys.
*/

// function solve() {
//   // Your code goes here
// }


const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }
// const x = {}
// for (const key1 in obj1) {
//   x[key1] = obj1[key1]
// }
// for (const key in obj2) {
//   x[key] = obj2[key]
// }

// console.log(x);

const x = { ...obj1, ...obj2 }
console.log(x);



