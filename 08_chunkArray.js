/*
Problem:
Split an array into chunks

Input:


Expected Output:
[[1, 2], [3, 4], [5]]

Explanation:
Break array into groups of size n.
*/

// function solve() {
//   // Your code goes here
// }

// const result = []
// const size = 2

// const inbuild = (arr, size) => {
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, size + 1))
//   }
//   return result
// }
// console.log(inbuild(arr, 2));

// console.log(result);


const arr = [1, 2, 3, 4, 5]
const result = []
let chuck = []
for (let i = 0; i < arr.length; i++) {
  chuck.push(arr[i])
  if (chuck.length === 2) {
    result.push(chuck)
    chuck = []
  }
  if (chuck.length > 0) {
    result.push(chuck)
  }
  return result
}
console.log(result);
