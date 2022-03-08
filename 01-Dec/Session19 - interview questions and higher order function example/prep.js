// ---------difference between null and undefined
//Undefined means we have declared a variable but have not yet assigned a value to that variable.

// null is an assignment value. null can be assigned to a variable as a representation of 'no value'
// var n = null
// console.log(n)

// console.log(typeof (undefined)) //undefined
// console.log(typeof (null)) //object

// What is not defined ?
// When you try to access a variable which does not exist in the program or is not declared, then you encounter a runtime error which is a 'reference error' that means that variable is not defined.
// console.log(b)// --> reference error

// -----------how is JS program executed

// parser, interpretation
// -----Steps
// 1. Create a global execution context. (push GEC in the call stack)
// 2. Memory phase
// 3. variable and function definition are stored in the Memory creation phase, value of variables will be undefined.

// 4. Code Execution phase
// 5. We execute the program line by line.

// Note - If a function call (execution) is encountered, then we create a function execution context and we push it into the call stack. This execution context also has the memory phase and the code execution phase.


// Execution context - is an abstract concept that holds information about the environment where the current code is being executed.

//-------What is Hoisting ?

// function hello() {
//     console.log('hi')
// }
// hello()

// function hello() {
//     console.log('hi')
// }

//------------ 4. what are first class functions ?
// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.



// --------what are pure functions?
// var x = 10
// function add(a, b) {
//     a++;//4->5
//     console.log(a + b + x);
// }
// x++;
// add(4, 5);//9, 20, 10, 21
// x++;
// add(4, 5);//9, 21, 10, 22
// x++;
// add(4, 5);//9, 22, 10, 23



// ---------5. What are prototypes ?
// Prototypes are objects from which other objects can inherit properties. These properties are hidden and can be accessed by the object which inherits the prototype.

//----------what are function constructors?
// The Function constructor creates a new Function object.

//---------- Prototype chaining
// Prototypes are the means of inheritance in JavaScript. The prototype of an object would also have a prototype object and this continues until we reach the top level when there is no prototype object.

// This is called prototype chaining. The properties defined on the prototype objects are also accessible to the object instance. And this is the reason why we are able to access properties which we have not defined explicitly on an object since those are accessible by inheritance through the prototype chaining.

// When we try to access any property of an object it is first checked in the own property of the object, if the property does not exist in the own property then the prototype object is scanned for that property and this continues until we get the property we are accessing or we reach at to the end of prototype chain giving undefined.



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

// ------difference between scope and execution context
// Scope is function-based. Scope belongs to the variable access of a function. There are only two scopes in JavaScript — global and function scope.

// Execution context is object-based. Execution context is an abstract concept that holds information about the environment where the current code is being executed. A context of a function is the value of the this keyword for that function.

// var firstName = 'Aditi'
// function a() {
//     return function () {
//         console.log("Hi", this.firstName)
//     }
// }
// let resultFunc = a()
// const obj = {
//     firstName: 'Rahul'
// }

// resultFunc() //global context
// resultFunc.call(obj) // object context




// ----------what are callback functions
// A callback is a plain JavaScript function passed to some method as an argument or option. It is a function that is to be executed after another function has finished executing, hence the name ‘call back‘


//------what are higher order functions


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