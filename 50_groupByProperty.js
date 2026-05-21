/*
Problem:
Group array of objects by property

Input:
[{type:'a'},{type:'b'},{type:'a'}]

Expected Output:
{a:[...],b:[...]}

Explanation:
Group by key property.
*/

// function solve() {
//   // Your code goes here
// }

const arr = [{ type: 'a' }, { type: 'b' }, { type: 'a' }]
const obj = {}
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    for (const key in arr[i]) {
        // console.log(obj[arr[i][key]]);
        obj[arr[i][key]] = [...]
    }
}
console.log(obj);

