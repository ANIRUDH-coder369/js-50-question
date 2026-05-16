/*
Problem:
Use reduce to find sum

Input:
[1,2,3,4]

Expected Output:
10

Explanation:
Sum numbers using reduce.
*/

// function solve() {
//   // Your code goes here
// }


const arr = [1, 2, 3, 4]

const x = arr.reduce((sum, item) => sum = sum + item, 0)
console.log(x);

