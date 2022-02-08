// ----------question 2 on this
// what is consoled ?
// const object = {
//     message: 'Hello, World!',
//     getMessage() {
//         const message = 'Hello, Earth!';
//         return this.message;
//     }
// };
// console.log(object.getMessage());

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


// ------------PROTOTYPE

// let obj = {}
// console.log(obj)
// console.log(obj.hasOwnProperty) // hidden function in prototype


// let rabbit = {
//         name1: 'rabbit'
//     }
// let animal = {
//     name2: 'animal',
//     sayHi: function () {
//             console.log(this.name2)
//         }
//     }
//     rabbit.__proto__ = animal
//     console.log(rabbit) // 2 prototypes, one in rabbit one in animal
            
// let animal = {
//         eats: true
//     };
// let rabbit = {
//         jumps: true
//     };
//talk about own property and inherited property

// rabbit.__proto__ = animal;
// console.log(rabbit)

// Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal.
// console.log(rabbit.name2)
// rabbit.sayHi() //accesses hidden function

// **************
// Here we can say that "animal is the prototype of rabbit" or "rabbit prototypically inherits from animal".
// So if animal has a lot of useful properties and methods, then they become automatically available in rabbit. Such properties are called “inherited”.

// If we have a method in animal, it can be called on rabbit:
// let animal = {
//     eats: true,
//     walk() {
//       console.log("Animal walk");
//     }
//   };

//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };

// No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.
// --------example1
// let animal = {
//     eat() {
//       this.full = true;
//     }
//   };
  
//   let rabbit = {
//     __proto__: animal
//   };
  
//   rabbit.eat();

// --------example2
// let user = {
//     fullname: 'darshit',
//     sayHi: function () {
//         console.log(this.fullname)
//     }
// }

// let admin = {
//     __proto__: user,
//     isAdmin: true,
//     fullname: 'rahul'
// }
// admin.sayHi()

// let user = {
//     fullName: 'darshit',
//     sayHi: function () {
//         console.log(this.fullName)
//         this.fullName = 'rahul'
//     }
// }
// admin = {
//     isAdmin: true,
//     __proto__: user
// }
// console.log(admin)
// console.log('admin fullname', admin.fullName) //darshit
// // changes admin
// admin.sayHi() //darshit, fullname changes to rahul
// console.log(admin)
// console.log('admin fullname', admin.fullName) // rahul
// console.log('user fullname', user.fullName) //user's fullname is PRESERVED

// console.log(admin.fullName)
// admin.sayHi() //darshit

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


//*******************------------very important question--------------------*****************
// let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach.push(food);
//     }
//   };
  
//   let speedy = {
//     __proto__: hamster
//   };
  
//   let lazy = {
//     __proto__: hamster
//   };
  
//   // This one found the food
//   speedy.eat("apple");
//   alert( speedy.stomach ); // apple
  
//   // This one also has it, why? fix please.
//   alert( lazy.stomach );

// --------ANSWER
// Let’s look carefully at what’s going on in the call speedy.eat("apple").

// The method speedy.eat is found in the prototype (=hamster), then executed with this=speedy (the object before the dot).

// Then this.stomach.push() needs to find stomach property and call push on it. It looks for stomach in this (=speedy), but nothing found.

// Then it follows the prototype chain and finds stomach in hamster.

// Then it calls push on it, adding the food into the stomach of the prototype.

// So all hamsters share a single stomach!

// Both for lazy.stomach.push(...) and speedy.stomach.push(), the property stomach is found in the prototype (as it’s not in the object itself), then the new data is pushed into it.

// Please note that such thing doesn’t happen in case of a simple assignment this.stomach=:

// let hamster = {
//   stomach: [],

//   eat(food) {
//     // assign to this.stomach instead of this.stomach.push
//     this.stomach = [food];
//   }
// };

// let speedy = {
//    __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // Speedy one found the food
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // Lazy one's stomach is empty
// alert( lazy.stomach ); // <nothing>
// Now all works fine, because this.stomach= does not perform a lookup of stomach. The value is written directly into this object.

// Also we can totally avoid the problem by making sure that each hamster has their own stomach:

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   __proto__: hamster,
//   stomach: []
// };

// let lazy = {
//   __proto__: hamster,
//   stomach: []
// };

// // Speedy one found the food
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // Lazy one's stomach is empty
// alert( lazy.stomach ); // <nothing>
// As a common solution, all properties that describe the state of a particular object, like stomach above, should be written into that object. That prevents such problems.