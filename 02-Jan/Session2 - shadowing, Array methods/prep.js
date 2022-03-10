// f1(); //normal function
// // f2(); // anonymous function
// // f3(); // arrow function
// function f1() {
//     console.log('Normal function');
// }

// var f2 = function () {
//     console.log('Anonymous function');
// }

// var f3 = () => { //Arrow functions were introduced in ES6
//     console.log('Arrow function');
// }
// // f1(); //normal function
// f2(); // anonymous function
// f3(); // arrow function

// convert normal to arrow function
// function add(a, b) { //parameters
//     return a + b;
// }

// const add = (a, b) => {
//     return a + b;
// }

// const add = (a, b) => a + b //implicit return

// question - make a multiplyBy2 function

// ----------shadowing
// var x = 10;
// function a() {
//     console.log(x);
// }
// a();


// var x = 30;

// function a() {
//     var x = 40;
//     console.log(x);
// }




// -----------Arrays

// let arr = [1, 2, 3, 4, 5];
// let lengthOfArr = arr.length;

// console.log(lengthOfArr);

// let arr = ['Joy', 'Happy', 'Sad', 1, 3, 5];

// let x = arr.length;
// console.log(x);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// //push - adds elements to the end of the array ALSO it returns the new length of the array

// let x = arr.push(9, 10, 11, 12, 13, 14, 15);
// console.log(x);

// let fruits = ['apple', 'banana', 'orange'];
// console.log(fruits) // length = 3

// let y = fruits.push('strawberry');

// console.log(fruits);//apple, banana, orange, strawberry
// console.log(y);// 4

// let arr = [1, 2, 3, 'hi', 'bye']; //array

// // console.log(arr.push('hey'));//
// let a = arr.push('hey', 'last', 'thing');
// console.log(a);// 8
// console.log(arr);


//pop - returns the popped element
// let arr = [1, 2, 3, 4, 5];

// let x = arr.pop();

// console.log(x);
// console.log(arr);

// let fruits = ['apple', 'banana', 'orange', 'kiwi'];

// fruits.pop();
// console.log(fruits) //apple banana orange
// console.log(fruits.pop()) //orange
// console.log(fruits) //apple banana
// console.log(fruits.push('strawberry')) //3
// console.log(fruits.push('melon')) //4
// console.log(fruits)//apple banana strawberry melon

// ------shift removes from front and returns the removed element
// console.log(fruits.shift());//apple
// console.log(fruits); //banana orange kiwi

// // ------unshift adds to front and returns new length
// let x = fruits.unshift('one') //one banana orange kiwi
// console.log(x);

// console.log(fruits);

//----------->SLICE ------ used to slice the array

// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes']

// let result = fruits.slice(1, 5); //last one excluded banana ...melon
// let result = fruits.slice(4); //melon ... goes till last
// let result = fruits.slice(1, -2);//banana ... melon, -2 is excluded
// let result = fruits.slice(-3); //melon tomato grapes

// console.log(fruits.push('strawberry', 'papaya', 'pear')); //10
// console.log(fruits.pop()); //pear
// console.log(fruits.shift()); //apple
// console.log(fruits.unshift('jackfruit'))//9
// let result = fruits.slice(0, 3);
// console.log(result); // jackfruit,banana, orange




// ------indexOf
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// let fruits = ['apple', 'banana', 'pear', 'orange', 'banana']
// console.log(fruits.indexOf('banana')) //1
// console.log(fruits.indexOf('banana', 2)) //4

// second argument is the starting index