// let arr = [1, 2, 3, 4, 5, 1, 5];
//----------includes()
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// console.log(arr.includes(2));

// ---------------lastIndexOf
// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// console.log(animals.lastIndexOf('Dodo'));

// console.log(animals.lastIndexOf('Tiger'));

//-------------findIndex()
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
// takes in element and index as arguments

// function cb(element) {
//     return element > 4 && element < 6
// }
// let result = arr.findIndex(cb)
// console.log(result)

// console.log(arr.findIndex(element => element > 4 && element < 6))
// console.log(arr.findIndex((element, index) => element < 5 && index > 2));

// ----------CONCAT
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);


// ---------TOSTRING
// The toString() method returns a string representing the specified array and its elements.
// const array1 = [1, 2, 'a', '1a'];

// console.log(array1.toString());


// ----------JOIN
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join()); //defaults to ,
// console.log(elements.join(''));//no space
// console.log(elements.join('-'));//hyphen

//---------------Some and every method

// ----SOME returns true when at least ONE element of the array satisfies the condition
// let arr = [1, 2, 3, 4, 5, 6];

// let func = (item) => {
//     if (item % 2 == 0) {            // element % 2 --> true, false
//         return true
//     }
// }

// let result1 = arr.some((element) => {
//     return element % 2 == 0
// })

// let result1 = arr.some(func) //callback function
// console.log(result1);

// let callBack = item => item > 3
// let result2 = arr.some(callBack);
// console.log(result2);

// console.log(arr.some(item => item > 3))

//-----------EVERY - returns true when EVERY element of the array satisfies the condition
// let arr = [2, 4, 6, 8];
// let result = arr.every(item => item % 2 == 0)
// console.log(result);

// let arr = [1, 2, 3, 4, 5, 6]

// console.log(arr.some(y => y < 2))// true
// console.log(arr.every(y => y < 6)) // true

// let fruits = ['apple', 'orange', 'banana', 'pear']
// let a = 'apple'
// console.log(a.length);

// console.log(fruits.some(item => item.length < 5));



//--------FILTER
// returns a new array with the elements that satisfy the callback condition
// let arr = [1, 2, 3, 4, 5]
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
// retusn new array populated with the results of the callback function

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



// -------------FOREACH-executes a provided function ONCE for EACH element in the array

// function printDouble(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] * 2)
//     }
// }
// printDouble(arr)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.forEach(function (item) {
//     console.log(item * 2)
// })


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


// -----------REDUCE---gives back a single value, accumulator, current, initial value
// let initialValue = 0; //initial value of the accumulator
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
// salaryarray
// let arr [1000, 2000, 3000, 4000, 5000]
// let output = arr.map(num => num * num).filter(num => num % 2 === 0).reduce((sum, curr) => {
//     sum = sum + curr;
//     return sum
// }, 0)

// console.log(output);


//salary example
// let salary = [100, 200, 300, 400, 500, 600];
// filter out salaries greater than 300
// double the filtered salaries
// find out the total salary that needs to be paid.