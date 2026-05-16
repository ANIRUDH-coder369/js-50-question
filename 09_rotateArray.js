/*
Problem:
Rotate array elements to the right by k steps

Input:
[1,2,3,4,5], k=2

Expected Output:
[4,5,1,2,3]

Explanation:
Rotate array right k times.
*/

// function solve() {
//   // Your code goes here
// }

// const inbuild = (arr, k) => {
//   return [...arr.slice(k + 1), ...arr.slice(0, k + 1)]
// }
// console.log(inbuild(arr, 2));
const arr = [4, 5, 1, 2, 3]
let x = []
for (let i = 3; i < arr.length; i++) {
  x.push(arr[i])
}

for (let i = 0; i < 3; i++) {
  x.push(arr[i])
}

console.log(x);

// console.log(without(arr, 2));



