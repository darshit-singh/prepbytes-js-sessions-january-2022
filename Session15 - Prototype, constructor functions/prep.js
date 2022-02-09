// --------PROTOTYPES
// let user = {}

// console.log(user)

// let animal = {
//     eats: true,
//     moves: true,
// }

// let rabbit = {
//     jumps: true
// }

// let mouse = {
//     hasTail: true
// }
// rabbit.__proto__ = animal //rabbit inherits animal object

// rabbit.eats = 'hi'

// mouse.__proto__ = animal // mouse inherits animal object

// console.log(rabbit)
// console.log(rabbit.eats)

// let animal = {
//     eats: true,
//     moves: true,
//     walk: function () {
//         console.log('I walk')
//     }
// }

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// }

// let fatRabbit = {
//     weight: 'fat',
//     __proto__: rabbit
// }

// // animal is the prototype of rabbit OR rabbit inherits from animal
// // fatRabbit.walk()

// console.log(fatRabbit.sleeps)

// let animal = {
//     eats: true,
//     moves: true,
// }

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// }

// console.log(rabbit.hasOwnProperty('eats'))
// console.log(rabbit.eats)

// let user = {
//     firstName: 'Rahul',
//     sayHi: function () {
//         console.log(this.firstName)
//         this.firstName = 'Bhanu'
//     }
// }

// let admin = {
//     firstName: 'Aditi',
//     isAdmin: true,
//     __proto__: user
// }

// user.sayHi() //Rahul
// console.log('user.firstName', user.firstName) // Bhanu
// console.log('admin.firstName', admin.firstName) // Aditi


// -----------FROM PREP 15.
// --------LOOPING
// The for..in loop iterates over inherited properties too.

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// // Object.keys only returns own keys
// console.log(Object.keys(rabbit)); // jumps

// // for..in loops over both own and inherited keys
// for (let prop in rabbit) console.log(prop);

// If that’s not what we want, and we’d like to exclude inherited properties, there’s a built-in method obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.

// for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);
  
//     if (isOwn) {
//       alert(`Our: ${prop}`); // Our: jumps
//     } else {
//       alert(`Inherited: ${prop}`); // Inherited: eats
//     }
//   }


// --------------QUESTIONS ON PROTOTYPE
// ------question1
// let animal = {
//     jumps: null
//   };
//   let rabbit = {
//     __proto__: animal,
//     jumps: true
//   };
  
//   console.log( rabbit.jumps ); // ? (1) true
  
//   delete rabbit.jumps;
  
//   console.log( rabbit.jumps ); // ? (2) null
  
//   delete animal.jumps;
  
//   console.log( rabbit.jumps ); // undefined

// --------question2
// Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3
// };

// let bed = {
//   sheet: 1,
//   pillow: 2
// };

// let pockets = {
//   money: 2000
// };
// The lookup time for properties that are high up on the prototype chain can have a negative impact on the performance, and this may be significant in the code where performance is critical. Additionally, trying to access nonexistent properties will always traverse the full prototype chain.

// solution
// let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3,
//     __proto__: head
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
//   };
  
//   let pockets = {
//     money: 2000,
//     __proto__: bed
//   };
  
//   alert( pockets.pen ); // 3
//   alert( bed.glasses ); // 1
//   alert( table.money ); // undefined

