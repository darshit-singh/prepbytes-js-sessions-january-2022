// ------First class functions
// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// const greetings = function() {
//     console.log("Hello there!");
//  }
//  greetings();

// We assigned an Anonymous Function in a Variable, then we used that variable to invoke the function by adding parentheses () at the end.

// function 10squared
// function 9squared
// function 8squared

// generalized function with parameter of n, for n squared

// function copyArrayMultiplyBy2(array) {
//     const output = []
//     for (let i=0; i<array.length; i++){
//         output.push(array[i] * 2)
//     }
//     return output
// }
// let myArray = [1,2,3]
// let result = copyArrayMultiplyBy2(myArray)

// copyArrayMultiplyBy3
// copyArraySubtract2

// what principle are we breaking ? - DRY

// What if we could insert functionality through arguments

// We could generalize functions - so we pass in our specific instruction only when we run our copyarray and manipulate function.

// function copyArrayAndManipulate(array, instructions) {
//     const output = []
//     for (let i = 0; i < array.length; i++) {
//         output.push(instructions(array[i]))
//     }
//     return output
// }
// function multiplyBy2(input) {
//     // debugger;
//     return input * 2
// }

// var result = copyArrayAndManipulate([1, 2, 3], multiplyBy2)






//---------- Higher order functions
// function sayHi() {
//     console.log('hi')
// }

// function x(fn) {
//     fn()
// }

// x(sayHi)

// x is the higher order function, sayHi is the callback function



// function copyArrayMultiplyBy2(array) {
//     let output = []

//     for (let i = 0; i < array.length; i++) {
//         output.push(array[i] * 2)
//     }

//     return output
// }

// let myArray = [1, 2, 3];

// let result = copyArrayMultiplyBy2(myArray)

// console.log(result)

// function copyArrayMultiplyBy3(array) {
//     let output = []

//     for (let i = 0; i < array.length; i++) {
//         output.push(array[i] * 3)
//     }

//     return output
// }

// let result = copyArrayMultiplyBy3(myArray)
// console.log(result)

// function multiplyby2(num) {
//     return num * 2;
// }

// function multiplyby3(num) {
//     return num * 3;
// }
// // function add5(num) {

// // }

// function copyArrayAndManipulate(array, instructions) { //instructions - multiplyby2, multiplyby3 ...

//     let output = []

//     for (let i = 0; i < array.length; i++) {
//         output.push(instructions(array[i])) //---> multiplyedby2(array[i])
//     }
//     return output
// }

// let myArray = [1, 2, 3];

// let result = copyArrayAndManipulate(myArray, multiplyby3)

// console.log(result)


// const sidesArray = [1, 2, 3, 4, 5] //sides of different squares

// const calcArea = function (arr) {
//     const output = []

//     for (let i = 0; i < arr.length; i++) {
//         output.push(arr[i] * arr[i])
//     }
//     return output
// }
// let result = calcArea(sidesArray)
// console.log(result)

// const sidesArray = [1, 2, 3, 4, 5] //sides of different squares

// const calcPerimeter = function (arr) {
//     const output = []

//     for (let i = 0; i < arr.length; i++) {
//         output.push(arr[i] * 4)
//     }
//     return output
// }
// let result = calcPerimeter(sidesArray)
// console.log(result)

// --------OPTIMIZED using functional programming
// const calcArea = side => side * side
// const calcPerimeter = side => 4 * side

// const operationOnSquare = (arr, instructions) => {
//     let output = []
//     for (let i = 0; i < arr.length; i++) {
//         output.push(instructions(arr[i]))
//     }
//     return output
// }
// console.log(operationOnSquare(sidesArray, calcArea))
// console.log(operationOnSquare(sidesArray, calcPerimeter))


//---------- CALLBACK
//--------------- function as argument
// const sayHello = function () {
//     return "Hello, ";
// }
// const sayHello = () => "hello"
// function greeting(funcVariable, name) {
//     console.log(funcVariable)
//     console.log(funcVariable(), name)
// }
// greeting(sayHello, 'Rahul')
// The function that we pass as an argument to another function, is called a Callback function. sayHello is a Callback function.

// Higher-order functions are functions that take other functions as arguments or return functions as their results.

// --------returning a function
// function sayHello() {
//     return function () {
//         console.log("Hello!");
//     }
// }

// -------CALLING IT USING VARIABLE
// const myFunc = sayHello();
// myFunc();

// ----------CALLING IT USING ()()
// function sayHello() {
//     return function () {
//         console.log("Hello!");
//     }
// }
// sayHello()();
