//------------MAP
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
//Key of any type is possible

// Methods and properties are:
// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

// let map = new Map();

// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); // a boolean key

// // remember the regular Object? it would convert keys to string
// // Map keeps the type, so these two are different:
// alert( map.get(1)   ); // 'num1'
// alert( map.get('1') ); // 'str1'

// alert( map.size );

//------------- CHAINING
// Every map.set call returns the map itself, so we can “chain” the calls:

// map.set('1', 'str1').set(1, 'num1').set(true, 'bool1');

// console.log(map)


// LOOPING IN MAP
// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion', 50]
// ]);

// // iterate over keys (vegetables)
// for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // cucumber, tomatoes, onion
// }

// // iterate over values (amounts)
// for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
// }

// // iterate over [key, value] entries
// for (let entry of recipeMap) { // the same as of recipeMap.entries()
//     console.log('key is', entry[0], '-', 'value is', entry[1]); // cucumber,500 (and so on)
// }

//----------FOREACH in map
// recipeMap.forEach((value, key) => {
//     console.log(`${key}: ${value}`); // cucumber: 500 etc
// });
// recipeMap.forEach((value, key) => {
//     recipeMap.set(key, value * 2);
// })
// console.log(recipeMap);

//sum of all values question
// function sum(recipeMap) {
//     let sum = 0;
//     recipeMap.forEach((val, key) => {
//         // sum = sum + recipeMap.get(key)
//         // sum = sum + val;
//     })
//     return sum;
// }
// console.log(sum(recipeMap));



// ---------------SET
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// Its main methods are:

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.



// let mySet = new Set();
// mySet.add([1, 2, 3]);
// mySet.add(4);
// mySet.add([1, 2, 3]);

// console.log(mySet)

// let arr = [1, 1, 1, 1, 3, 3, 3, 3, 2, 2, 2, 2];
// let newSet = new Set();
// arr.forEach(item => newSet.add(item))
// console.log(newSet);

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set keeps only unique values
// console.log( set.size ); // 3

// for (let user of set) {
//   console.log(user.name); // John (then Pete and Mary)
// }

