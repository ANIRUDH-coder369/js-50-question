/*
Problem:
Reverse an array

Input:
[1, 2, 3, 4, 5]

Expected Output:
[5, 4, 3, 2, 1]

Explanation:
Reverse the order of elements in an array.
*/

// function solve() {
// }
//  inbuild function
// 
const arr = [1, 2, 3, 4, 5]

// const inbuild = () => {
//   return arr.reverse()
// }
// console.log(inbuild());



const x = []
for (let i = arr.length - 1; i >= 0; i--) {
  x.push(arr[i])
}
console.log(x);

