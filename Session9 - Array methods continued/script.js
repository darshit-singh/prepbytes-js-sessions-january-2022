let arr = [1, 2, 3, 4, 5, 1, 5];
//----------includes()
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

console.log(arr.includes(2));

//-----------indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// console.log(arr.indexOf(5))

// ---------------lastIndexOf
// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// console.log(animals.lastIndexOf('Dodo'));

// console.log(animals.lastIndexOf('Tiger'));

//-------------findIndex()
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

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

// console.log(elements.join());
// console.log(elements.join(''));
// console.log(elements.join('-'));



//--------FILTER


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