/*
Problem:
Find the second largest number in an array

Input:
[10, 5, 8, 20, 15]

Expected Output:
15

Explanation:
Return the second largest element.
*/

// function solve() {
//   // Your code goes here
// }


const arr = [10, 5, 8, 20, 15, 20]

// let large = arr[0]
// let second

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > large) {
//     second = large
//     large = arr[i]
//   } else if (arr[i] > second && arr[i] < large) {
//     second = arr[i]
//   }
// }
// console.log(large, second);


const inbuild = (arr) => {
  const soreted = arr.sort((a, b) => b - a)
  const unique = [...new Set(soreted)]

  return { largest: unique[0], secondLargest: unique[1] }
}
console.log(inbuild(arr));

