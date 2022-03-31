// ----------cookies

// document.cookie = "user=Aditi" //name -> user, Value -> aditi

// document.cookie = "id=2"

// document.cookie = "admin=true"

// document.cookie = "user=rahul; max-age=1"

// console.log(document.cookie)

// // max-age - seconds*****         document.cookie = "user=Aditi; options"

// // to delete a cookie you can set max-age directly to -1

// document.cookie = "id=2; max-age=-1"



//-------------------------- Localstorage vs session storage
// Web storage objects localStorage and sessionStorage allow to save key/value pairs in the browser.

// What’s interesting about them is that the data survives a page refresh (for sessionStorage) and even a full browser restart (for localStorage). We’ll see that very soon.

// Unlike cookies, web storage objects are not sent to server with each request. Because of that, we can store much more. Most browsers allow at least 2 megabytes of data (or more) and have settings to configure that.

// Also unlike cookies, the server can’t manipulate storage objects via HTTP headers. Everything’s done in JavaScript.

// localStorage.setItem(key, value)
// localStorage.setItem('greetings', 'hi') //set

// console.log(localStorage.getItem('greetings')) //get


// We can also use a plain object way of getting/setting keys, like this:
// localStorage.name = 'Rahul'

// console.log(localStorage.name)
// console.log('accessing through getItem', localStorage.getItem('name'))

// please note that both key and value must be strings.

// If were any other type, like a number, or an object, it gets converted to string automatically:

// How to store object in localStorage
// let obj = { firstName: 'rahul' }

// localStorage.setItem('admin', obj)

// //use JSON.stringify

// localStorage.setItem('admin', JSON.stringify(obj))

// let output = JSON.parse(localStorage.getItem('admin'))
// console.log(output)



// --------------LocalStorage and SessionStorage
//local storage data will persist even after the browser is restarted

// localStorage.setItem(key, value)
// key and value both have to be strings
// localStorage.setItem('greetings', 'hi')
// localStorage.setItem('id', '2')

// console.log(localStorage.getItem('greetings'))

// setTimeout(() => {
//     localStorage.removeItem('greetings') //removes only that particular key
// }, 1000)

// setTimeout(() => {
//     localStorage.clear() //removes everything
// }, 2000)

// let data = {
//     firstName: 'Rahul',
//     lastName: 'sharma',
//     id: 2
// }

// // localStorage.setItem('obj', data)

// localStorage.setItem('obj', JSON.stringify(data))


// let getValue = JSON.parse(localStorage.getItem('obj'))

// console.log(getValue)




// -------Session storage
// The sessionStorage object is used much less often than localStorage.

// Properties and methods are the same, but it’s much more limited:

//1. The sessionStorage exists only within the current browser tab.

//2. Another tab with the same page will have a different storage.

//3. But it is shared between iframes in the same tab (assuming they come from the same origin).

//4. The data survives page refresh, but not closing/opening the tab.



// 1. == vs ===
// The main difference between “==” and “===” operator is that formerly compares variable by making type correction e.g. if you compare a number with a string with numeric literal, == allows that, but === doesn’t allow that, because it not only checks the value but also type of two variable, if two variables are not of the same type “===” return false, while “==” return true.




//2. what is spread operator ?
//allows an iterable such as an array expression or string to be expanded in places where zero or more arguments




//3. Difference between var, let and const




//4. What is execution context?
// Execution context is an abstract concept that holds information about the environment where the current code is being executed.
// Two types of execution context :
// Global execution context – This execution context is created by default by the JavaScript engine.
// Function execution context – This execution context is created whenever a function is executed.

// The first execution context is created when the JavaScript engines run your code. The JavaScript engine creates a new execution context before any code is executed, and this new execution context is called global execution context.

// The global execution context is the default execution context that is created by the JavaScript engine. All the global code that is not inside a function or object will be executed inside the global execution context.

// Memory Creation –  Inside this phase, the global object and the this keyword are created. Memory is allocated for the variables and functions created. You can see that our variables hold the value of “undefined.”
//Code Execution  –  Inside this phase, the execution of the code starts. In our example, we assigned values to our variables and defined our function.




//------------ 5. what are first class functions ?
// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.




// ---------6. What are closures?
// Closure - a function bundled together with its lexical environment; along with its lexical scope
// inner function has access to its parent's lexical scope




// ------7. Explain call, apply and bind methods.
// used to change the value of this to a specified object, rather than where the function is called from




// ---------8. What are prototypes ?
// Prototypes are objects from which other objects can inherit properties. These properties are hidden and can be accessed by the object which inherits the prototype.




// ---------9. What are promises, why do we need them ?
// Promises give us the ability to write cleaner code but reducing (or entirely removing) call-back hell.




// ---------10. What is the purpose of async, await keywords ?
// synctactic sugar, so your code is more readable than if you used promises




//----------11. What are function constructors?
// The Function constructor creates a new Function object.




// --------12. What is HOISTING ?
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

// Hoisting allows functions to be safely used in code before they are declared.
//Variable and class declarations are also hoisted, so they too can be referenced before they are declared. Note that doing so can lead to unexpected errors, and is not generally recommended.
// ---------Are arrow functions or anonymous functions hoisted ?
//  - no

// ---------13. What is DOM?
//



//---------14. Difference between null and undefined?
// Undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value. Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.

//---------- Difference between not defined and undefined ?
// not defined variables are those that do not exist in a program and are not declared. If the program tries to read the value of a variable which is not defined, then a runtime error is encountered. Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.

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



// --------15. what are pure functions?
// functions which give same output for the same set of inputs
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



//----------- 16. What is event loop and call stack ?
//



// ---------17. What are prototypes ?
// Prototypes are objects from which other objects can inherit properties. These properties are hidden and can be accessed by the object which inherits the prototype.



//----------18. Prototype chaining
// Prototypes are the means of inheritance in JavaScript. The prototype of an object would also have a prototype object and this continues until we reach the top level when there is no prototype object.

// This is called prototype chaining. The properties defined on the prototype objects are also accessible to the object instance. And this is the reason why we are able to access properties which we have not defined explicitly on an object since those are accessible by inheritance through the prototype chaining.

// When we try to access any property of an object it is first checked in the own property of the object, if the property does not exist in the own property then the prototype object is scanned for that property and this continues until we get the property we are accessing or we reach at to the end of prototype chain giving undefined.




// -----------18. what is the use of setTimeout?




// -----------19. What is callback hell
// nested callbacks



// -----------20. What is promise chaining




// ------------21. what is creation phase and execution phase?





// ------------22. What is temporal dead zone ?
// The final salient difference between let / const and var is that if you access var before it's declared, it is undefined. But if you do the same for let and const, they throw a ReferenceError. They throw the error all because of the Temporal Dead Zone. TDZ  the term to describe the state where variables are un-reachable. They are in scope, but they aren't declared.




//--------23.what are anonymous functions?
// An anonymous function is a function without a name



//------------ 24. what are first class functions ?
// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.




// ---------------------------------------------------------------------------------
// ------difference between scope and execution context
// Scope is function-based. Scope belongs to the variable access of a function. There are only two scopes in JavaScript — global and function scope.

// Execution context is object-based. Execution context is an abstract concept that holds information about the environment where the current code is being executed. A context of a function is the value of the this keyword for that function.

// ----------what are callback functions
// A callback is a plain JavaScript function passed to some method as an argument or option. It is a function that is to be executed after another function has finished executing, hence the name ‘call back‘



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

// ---------5. What are prototypes ?
// Prototypes are objects from which other objects can inherit properties. These properties are hidden and can be accessed by the object which inherits the prototype.



//---------- Prototype chaining
// Prototypes are the means of inheritance in JavaScript. The prototype of an object would also have a prototype object and this continues until we reach the top level when there is no prototype object.

// This is called prototype chaining. The properties defined on the prototype objects are also accessible to the object instance. And this is the reason why we are able to access properties which we have not defined explicitly on an object since those are accessible by inheritance through the prototype chaining.

// When we try to access any property of an object it is first checked in the own property of the object, if the property does not exist in the own property then the prototype object is scanned for that property and this continues until we get the property we are accessing or we reach at to the end of prototype chain giving undefined.

// ------difference between scope and execution context
// Scope is function-based. Scope belongs to the variable access of a function. There are only two scopes in JavaScript — global and function scope.

// Execution context is object-based. Execution context is an abstract concept that holds information about the environment where the current code is being executed. A context of a function is the value of the this keyword for that function.





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