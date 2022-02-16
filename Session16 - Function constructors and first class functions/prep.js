// ----Constructor functions
// function User(name, last) {
//     //this = {} , implicit

//     this.firstName = name;
//     this.isAdmin = false;
//     this.lastName = last
//     // {firstName: raghu, isAdmin: false} implicit

//     // return this, implicit

// }

// let person1 = new User('raghu', 'ram')

// console.log(person1)

// When a function is executed with new, it does the following steps:

// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.


// let animal = {
//     eats: true
// };

// function Rabbit(name) {
//     this.name = name;
// }

// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// console.log(rabbit); // true

// Setting Rabbit.prototype = animal literally states the following: "When a new Rabbit is created, assign its [[Prototype]] to animal".


//--------Question
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// console.log( rabbit.eats ); // true

// ---------------1
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// console.log( rabbit.eats ); // ? true
// The assignment to Rabbit.prototype sets up [[Prototype]] for new objects, but it does not affect the existing ones.

//-------------2
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// console.log( rabbit.eats ); // ? false
// Objects are assigned by reference. The object from Rabbit.prototype is not duplicated, it’s still a single object referenced both by Rabbit.prototype and by the [[Prototype]] of rabbit.So when we change its content through one reference, it is visible through the other one.


//---------------3
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// console.log( rabbit.eats ); // ? true
// All delete operations are applied directly to the object. Here delete rabbit.eats tries to remove eats property from rabbit, but it doesn’t have it. So the operation won’t have any effect.

// -----------------4
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// console.log( rabbit.eats ); // ? undefined
// The property eats is deleted from the prototype, it doesn’t exist any more.




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