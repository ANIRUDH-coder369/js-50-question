/*
Problem:
Return unique elements from an array

Input:
 

Expected Output:
[1, 2, 3, 4]

Explanation:
Remove duplicate values.
*/

// function solve() {
//   // Your code goes here
// }

const arr = [1, 2, 2, 3, 4, 4]
// const inbuild = arr => {
//   return [...new Set(arr)]
// }
// console.log(inbuild(arr));

const unique = [arr[0]]
for (let i = 0; i < arr.length; i++) {
  let isFound = false
  for (let j = 0; j; j++) {
    if (arr[i] === unique[j]) {
      isFound = true
    }
    if (!isFound) {
      unique.push(arr[i])
    }

  }
}

console.log(unique);

