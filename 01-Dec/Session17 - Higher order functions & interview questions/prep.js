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


// --------QUESTIONS

// 1. == vs ===
//2. what is spread operator ?
//allows an iterable such as an array expression or string to be expanded in places where zero or more arguments

// 3. What is execution context?
// Execution context is an abstract concept that holds information about the environment where the current code is being executed.
// Two types of execution context :
// Global execution context – This execution context is created by default by the JavaScript engine.
// Function execution context – This execution context is created whenever a function is executed.

// The first execution context is created when the JavaScript engines run your code. The JavaScript engine creates a new execution context before any code is executed, and this new execution context is called global execution context.

// The global execution context is the default execution context that is created by the JavaScript engine. All the global code that is not inside a function or object will be executed inside the global execution context.

// Memory Creation –  Inside this phase, the global object and the this keyword are created. Memory is allocated for the variables and functions created. You can see that our variables hold the value of “undefined.”
//Code Execution  –  Inside this phase, the execution of the code starts. In our example, we assigned values to our variables and defined our function.


// ------difference between scope and execution context
// Scope is function-based. Scope belongs to the variable access of a function. There are only two scopes in JavaScript — global and function scope.

// Execution context is object-based. Execution context is an abstract concept that holds information about the environment where the current code is being executed. A context of a function is the value of the this keyword for that function.

// --------HOISTING
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

// Hoisting allows functions to be safely used in code before they are declared.
//Variable and class declarations are also hoisted, so they too can be referenced before they are declared. Note that doing so can lead to unexpected errors, and is not generally recommended.
// ---------Are arrow functions or anonymous functions hoisted ?
//  - no


// 4. what are first class functions ?
// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// 5. What are prototypes ?
// Prototypes are objects from which other objects can inherit properties. These properties are hidden and can be accessed by the object which inherits the prototype.

//---------- Prototype chaining
// Prototypes are the means of inheritance in JavaScript. The prototype of an object would also have a prototype object and this continues until we reach the top level when there is no prototype object.

// This is called prototype chaining. The properties defined on the prototype objects are also accessible to the object instance. And this is the reason why we are able to access properties which we have not defined explicitly on an object since those are accessible by inheritance through the prototype chaining.

// When we try to access any property of an object it is first checked in the own property of the object, if the property does not exist in the own property then the prototype object is scanned for that property and this continues until we get the property we are accessing or we reach at to the end of prototype chain giving undefined.

//-------------- Impact of Prototype Chaining on Performance
// Due to the multiple levels of prototype chaining the total time to look up a property that is at the higher level of prototype chain may have a negative impact on performance in the code where performance is of prime importance.

// Also there might be situations where we try to look up for a property that does not exist but since the property has to be looked up on the prototype chain until we reach the end we may end up losing time in lookup.

// In order to avoid such situation we can use the hasOwnProperty method which is inherited by all the objects from Object.prototype to limit the look up at a particular level.
// hasOwnProperty accepts the property name we are looking for and returns true or false based on whether the property is found or not.


