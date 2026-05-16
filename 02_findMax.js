/*
Problem:
Find the maximum value in an array

Input:
[1, 7, 3, 9, 2]

Expected Output:
9

Explanation:
Return the largest number from the array.
*/
const arr = [1, 7, 3, 9, 2]
let x = arr[0]



const inbuild = arr => {
  return Math.max(...arr)
}
console.log(inbuild(arr));


for (let i = 0; i < arr.length; i++) {
  if (x < arr[i]) {
    x = arr[i]
  }
}
console.log(x);


// function solve() {

// }
