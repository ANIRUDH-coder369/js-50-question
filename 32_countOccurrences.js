/*
Problem:
Count occurrences of each element

Input:
['a','b','a','c']

Expected Output:
{a:2,b:1,c:1}

Explanation:
Return frequency count object.
*/

// function solve() {
//   // Your code goes here
// }

const arr = ['a', 'b', 'a', 'c']
const obj = {}
let x = 1

for (let i = 0; i < arr.length; i++) {

  obj[arr[i]] = x
}
console.log(obj);
