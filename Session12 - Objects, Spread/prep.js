// ------------OBJECTS
// As we know from the chapter Data types, there are eight data types in JavaScript. Seven of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).

// An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

// box with multiple files
// An empty object (“empty cabinet”) can be created using one of two syntaxes:

// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

// let user = {     // an object
//   name: "John",  // by key "name" store value "John"
//   age: 30        // by key "age" store value 30
// };

// A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.

// In the user object, there are two properties:

// The first property has the name "name" and the value "John".
// The second one has the name "age" and the value 30.
// The resulting user object can be imagined as a cabinet with two signed files labeled “name” and “age”.


// -----DOT NOTATION
// Property values are accessible using the dot notation:
// console.log( user.name ); // John
// console.log( user.age ); // 30

// adding a property
// user.isAdmin = true;

// deleting a property
// delete user.age;

//----------- SQUARE BRACKET
// ---------multiword properties
// We can also use multiword property names, but then they must be quoted:

// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // multiword property name must be quoted
//   };

// For multiword properties, the dot access doesn’t work:
// The dot requires the key to be a valid variable identifier
// There’s an alternative “square bracket notation” that works with any string:
// user["likes birds"] = true;

// Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:

// let key = "likes birds";

// same as user["likes birds"] = true;
// user[key] = true;

// let user = {
//     name: "John",
//     age: 30
//   };

//   let key = "name";
//   alert( user.key ) //WONT WORK


// --------COMPUTED PROPERTIES
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.

// For instance:

// let fruit = "apple";

// let obj = {
//     [fruit]: true
// }
// console.log(obj[fruit]);
// console.log(obj.apple);

// let fruit = 'apple';
// let bag = {
//     [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };

// console.log(bag[fruit + 'Computers'])

// **************
// Square brackets are much more powerful than the dot notation. They allow any property names and variables. But they are also more cumbersome to write.

// So most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets.

// ---------Property value shorthand

// let name1 = 'Rahul'
// let user = {
//     name1,  // same as name:name
//     age: 30
// };
// console.log(user.name1)

// ---------PROPERTY EXISTENCE IN OPERATOR
// A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!

// Reading a non-existing property just returns undefined. So we can easily test whether the property exists:

// let user = {};

// console.log( user.noSuchProperty === undefined ); // true means "no such property"
// There’s also a special operator "in" for that.

// The syntax is:

// "key" in object
// For instance:

// let user = { name: "John", age: 30 };

// console.log( "age" in user ); // true, user.age exists
// console.log( "blabla" in user ); // false, user.blabla doesn't exist


// --------FOR IN LOOP
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };

//   for (let key in user) {
//     // keys
//     console.log( key );  // name, age, isAdmin
//     // values for the keys
//     console.log( user[key] ); // John, 30, true
//   }


// ----------PROBLEMS:
// SUM
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };

//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }

//   console.log(sum); // 390

// --------MULtiply numeric values with 2
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// multiplyNumeric(menu);
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }





// ---------OBJECT REFERENCING AND COPYING
// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

// let message = "Hello!";
// let phrase = message;

// As a result we have two independent variables, each one storing the string "Hello!".
// separate message box and phrase box

// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

// separate object box and variable name has address to that object box

// When an object variable is copied, the reference is copied, but the object itself is not duplicated.

// let user = { name: "John" };

// let admin = user; // copy the reference
// Now we have two variables, each storing a reference to the same object:
// 2 references pointing to the same object box

// This means : We can use either variable to access the object and modify its contents:

// It’s as if we had a cabinet with two keys and used one of them (admin) to get into it and make changes. Then, if we later use another key (user), we are still opening the same cabinet and can access the changed contents.
// ek almari ki 2 chabi


// -------COMPARISON BY REFERENCE
// Two objects are equal only if they are the same object.

// For instance, here a and b reference the same object, thus they are equal:
// let a = {};
// let b = a; // copy the reference

// console.log( a == b ); // true, both variables reference the same object
// console.log( a === b ); // true

// let a = {};
// let b = {}; // two independent objects

// console.log(a === b); // false


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

// // now clone is a fully independent object with the same content
// clone.name = "Pete"; // changed the data in it

// console.log(user.name); // still John in the original object


// Object.assign(dest, [src1, src2, src3...])

// let user = {
//   name: "John",
//   age: 30
// };

// let clone = Object.assign({}, user);