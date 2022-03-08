// function sayHi() {
//     console.log('Hi')
// }

// function x(fn) {
//     console.log(fn)
//     // fn()
// }

// x(sayHi)
// x -> higher order function - function that accepts a function as an argument OR returns a function
// sayHi -> callback function - function that gets passed IN as an argument

// var myArray = [1, 2, 3];

// function copyArrayMultiplyBy2(array) {
//     var output = []

//     for (var i = 0; i < array.length; i++) {
//         output.push(array[i] * 2)
//     }

//     return output
// }

// var result = copyArrayMultiplyBy2(myArray)
// console.log(result)

// function copyArrayAndSquare(array) {

//     var output = []

//     for (var i = 0; i < array.length; i++) {
//         output.push(array[i] * array[i])
//     }
//     return output
// }

// var squaredResult = copyArrayAndSquare(myArray)
// console.log(squaredResult);

// by using similar functions we are breaking the DRY principle.

// var myArray = [1, 2, 3];

// // function multiplyBy2(number) {
// //     return number * 2
// // }

// var multiplyBy2 = num => num * 2

// // function squareNum(number) {
// //     return number * number
// // }
// var squareNum = num => num * num


// function manipulateArray(array, logic) {
//     var output = []

//     for (let i = 0; i < array.length; i++) {
//         output.push(logic(array[i]))
//     }

//     return output
// }

// var result = manipulateArray(myArray, multiplyBy2)
// // var result = manipulateArray(myArray, squareNum)
// console.log(result)
