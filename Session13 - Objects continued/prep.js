// -----------CLONING AND MERGING OBJECTS

// let user = {
//     name: "John",
//     age: 30
// };

// let clone = {}; // the new empty object

// // let's copy all user properties into it
// for (let key in user) {
//     clone[key] = user[key];
// }

// clone double value then sum it

// // now clone is a fully independent object with the same content
// clone.name = "Pete"; // changed the data in it

// console.log(user.name); // still John in the original object


// Object.assign(dest, [src1, src2, src3...])
// Object.assign(clone, user)
// console.log(clone)
// console.log(user == clone)
// let user = {
//   name: "John",
//   age: 30
// };

// let clone = Object.assign({}, user);

// ----------spread operator
// function sum(x, y, z) {
//     return x + y + z;
//   }
  
//   const numbers = [1, 2, 3];
  
//   console.log(sum(...numbers));



//-----to clone
// let user = {
//     name: "John",
//     age: 30
// };

// let clone = {...user}


//-------to concatenate
// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];

// //  Append all items from arr2 onto arr1
// arr1 = arr1.concat(arr2);

// arr1 = [...arr1, ...arr2];




//-------object merging and cloning
// let obj1 = { foo: 'bar', x: 42 };
// let obj2 = { foo: 'baz', y: 13 };

// let clonedObj = { ...obj1 };
// // Object { foo: "bar", x: 42 }

// let mergedObj = { ...obj1, ...obj2 };



// ----------THIS KEYWORD
// normal function working in object
// let user = {
//     name1: 'Rahul',
//     sayHi: function () {
//         console.log('Hi');
//     }
// }
// user.sayHi()


// let user = {
//     name1: 'Rahul',
//     sayHi: function () {
//         console.log('Hi', user.name1);
//     }
// }
// user.sayHi()

// ---------with a different object
// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         alert(user.name); // leads to an error
//     }

// };
// let admin = user;
// user = null; //removed object reference from the user.
// // console.log(admin, user)
// admin.sayHi()


// let user = {
//     name1: 'Rahul',
//     sayHi: function () {
//         console.log('Hi', this.name1);
//     }
// }

// user.sayHi()

//----- FUNCTION DECLARATION OUTSIDE
// function sayHi() {
//     console.log(this.name)
// }

// let user = {
//     name: 'Rahul'
// }

// let admin = {
//     name: 'Aditi'
// }

// user.func = sayHi;
// admin.functionVar = sayHi;

// user.func()
// admin.functionVar()

// ------------ARROW FUNCTIONS HAVE NO THIS
// var name1 = 'Akriti' // won't work for let or const as they are not saved in global
// let user = {
//     name1: 'Rahul',
//     sayHi: () => {
//         console.log('Hi', this.name1);
//     }
// }

// user.sayHi()
// console.log(window.name1)
// show that this points to the global object first
// In a browser, global functions and variables declared with var (not let/const!) become the property of the global object:

// The value of this is defined at run-time.

// ------question on this
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function () { // shows the current step
//         console.log(this.step);
//     }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.down();
// ladder.down();
// ladder.showStep(); // -1
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.showStep(); // 2



// ----------question 2
// what is consoled ?
// const object = {
//     message: 'Hello, World!',
//     getMessage() {
//       const message = 'Hello, Earth!';
//       return this.message;
//     }
//   };
//   console.log(object.getMessage());

// --------question3
// const object = {
//     who: 'World',
//     greet() {
//       return `Hello, ${this.who}!`;
//     },
//     farewell: () => {
//       return `Goodbye, ${this.who}!`;
//     }
//   };
//   console.log(object.greet());    // hello world
//   console.log(object.farewell()); //goodbye undefined



// call, apply, bind
// let user = {
//     name: 'darshit',
//     sayHi: function () {
//         console.log(this)
//         console.log(this.name)
//     }
// }
// let admin = {
//     name: 'rahul'
// }

// console.log(user.sayHi)
// user.sayHi.call(user)
// user.sayHi.apply(admin)
// user.sayHi.bind(admin)()

// let hello = user.sayHi.bind(admin);

// hello()

// --------question4
// const object = {
//     message: 'Hello, World!'
//   };
//   function logMessage() {
//     console.log(this.message); // logs 'Hello, World!'
//   }
//   // Using func.call() method
//   logMessage.call(object);
//   // Using func.apply() method
//   logMessage.apply(object);
//   // Creating a bound function
//   const boundLogMessage = logMessage.bind(object);
//   boundLogMessage();
