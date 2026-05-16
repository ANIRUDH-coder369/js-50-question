/*
Problem:
Deep clone an object

Input:
{a:{b:2}}

Expected Output:
{a:{b:2}}

Explanation:
Create a new object identical to input without shared references.
*/

// function solve() {
//   // Your code goes here
// }


const obj = { a: { b: 2 } }
const x = {}
for (const key in obj) {
    if (x[key] === undefined) {
        x[key] = obj[key]
        console.log(x);

    }
}
