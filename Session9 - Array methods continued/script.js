//--------FILTER

let arr = [1, 2, 3, 4, 5];

// function isEven(num) {
//     return num % 2 === 0;
// }

// let newArr = arr.filter(isEven);
// console.log(newArr);

// let newArr = arr.filter(function isEven(num) {
//     return num % 2 === 0;
// })

// let newArr = arr.filter(num => num % 2 === 0);

// console.log(newArr);

//--------MAP

// function double(num) {
//     return num * 2;
// }
//function square

// let newArr = arr.map(double);

// let newArr = arr.map(function (num, index) {
//     console.log(index)
//     return num * 2;
// })
// console.log(newArr)

// let newArr = arr.map(num => num * 2)



// -------------FOREACH
// function sumFunc(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(sumFunc(arr));

// let sum = 0;
// arr.forEach(function (num) {
//     sum = sum + num;
// })
// console.log(sum);


// -----------REDUCE
// let initialValue = 0;
// let output = arr.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// }, initialValue)
// console.log(output)

// let output = arr.reduce((acc, curr) => {
//     acc = acc + curr;
//     return acc;
// }, 0)
// console.log(output);

// function findMax(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max)
//             max = arr[i]
//     }
//     console.log(max);
// }
// findMax(arr);

// let maxOutput = arr.reduce((max, curr) => {
//     if (curr > max) {
//         max = curr;
//     }
//     return max
// }, 0)
// console.log(maxOutput);

//-------------------------- FILTER MAP REDUCE CAN BE COMBINED

// let output = arr.map(num => num * num).filter(num => num % 2 === 0).reduce((sum, curr) => {
//     sum = sum + curr;
//     return sum
// }, 0)

// console.log(output);


//salary example