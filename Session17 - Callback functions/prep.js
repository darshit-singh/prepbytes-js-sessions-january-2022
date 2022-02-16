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