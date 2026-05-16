/*
Problem:
Use map to double array elements

Input:
[1,2,3]

Expected Output:
[2,4,6]

Explanation:
Double each element using map.
*/

// function solve() {
//   // Your code goes here
// }
const arr = [1, 2, 3]
const NewArr = []
let x = 1

// arr.map(item => x = item * x)
// arr.map(item => { x = x * item, NewArr.push(x * item), x = 1 })
arr.map(item => { NewArr.push(item * 2) })
console.log(x);
console.log(NewArr);

