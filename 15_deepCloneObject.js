// /*
// Problem:
// Deep clone an object

// Input:
// {a:{b:2}}

// Expected Output:
// {a:{b:2}}

// Explanation:
// Create a new object identical to input without shared references.
// */

// // function solve() {
// //   // Your code goes here
// // }


const obj = { a: { b: 2 } }
// const x = {}
// for (const key in obj) {
//     x[key] = obj[key]

// }
// console.log(x);

// const result = {}

// for (const key in obj) {
//     if (typeof obj[key] === 'object') {
//         result[key] = { ...obj[key] }
//     }
// }
// console.log(result);

for (const key in obj) {
    if (typeof obj !== 'object') {
        return obj
    }
    const result = Array.isArray(obj) ? [] : {}

    for (const key in obj) {
        result[key] = obj[key]
    }
    console.log(obj);
    return console.log(result);

}
// console.log(result);

// const obj = { a: { b: 2 } }
obj.a.b = 'dell'
console.clear()
console.log(obj);

