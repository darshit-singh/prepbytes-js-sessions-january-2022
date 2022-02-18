// --------QUESTIONS

// 1. == vs ===
// The main difference between “==” and “===” operator is that formerly compares variable by making type correction e.g. if you compare a number with a string with numeric literal, == allows that, but === doesn’t allow that, because it not only checks the value but also type of two variable, if two variables are not of the same type “===” return false, while “==” return true.

// Difference between null and undefined?
// Undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value. Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.

// Difference between not defined and undefined ?
// not defined variables are those that do not exist in a program and are not declared. If the program tries to read the value of a variable which is not defined, then a runtime error is encountered. Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.

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

//--------what are anonymous functions?
// An anonymous function is a function without a name

//------------ 4. what are first class functions ?
// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// ---------5. What are prototypes ?
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


// ----------what are callback functions
// A callback is a plain JavaScript function passed to some method as an argument or option. It is a function that is to be executed after another function has finished executing, hence the name ‘call back‘

// ------Bind
// let p1 = {
//     firstName: 'John',
//     lastName: 'Smith'
//   };
//   let p2 = {
//     firstName: 'Ann',
//     lastName: 'Brown'
//   };
//   function sayWelcome() {
//     console.log('Welcome ' + this.firstName + ' ' + this.lastName);
//   }
//   let sayWelcomeJohn = sayWelcome.bind(p1);
//   let sayWelcomeAnn = sayWelcome.bind(p2);
//   sayWelcomeJohn(); // Welcome John Smith
//   sayWelcomeAnn(); // Welcome Ann Brown

// --------call
// let p1 = {
//     firstName: 'John',
//     lastName: 'Smith'
//   };
//   let p2 = {
//     firstName: 'Ann',
//     lastName: 'Brown'
//   };
//   function sayWelcome(greeting) {
//     console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
//   }
//   sayWelcome.call(p1, 'Welcome'); // Welcome John Smith
//   sayWelcome.call(p2, 'Welcome'); // Welcome Ann Brown

// --------question on this, Important
// function sayBye() {
//     console.log(this.firstName)
//     console.log(self.firstName)
// }
// var myObj = {
//     firstName: 'rahul',
//     sayHi: function () {
//         var self = this
//         console.log('Hi', this.firstName)
//         console.log('Hi', self.firstName)
//         function sayBye() {
//             console.log('---------------------')
//             console.log('Bye', this.firstName)
//             console.log('Bye', self.firstName)
//         }
//         sayBye()
//     }
// }
// myObj.sayHi()




//-----------Square area example higher order functions
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
