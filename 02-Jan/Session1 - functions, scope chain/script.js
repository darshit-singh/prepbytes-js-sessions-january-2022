// var a

// console.log(a);

// a = 10

// console.log(a)


// functions are reusable blocks of code

// function abc() { //function decleration
//     // code block for the function
//     console.log('Inside abc')
// }


// to run the block of code inside the function, I need to execute(call) the function

// abc() //function execution, function call


// function add(a, b) { //4, 5 //parameters
//     console.log(a + b)
// }

// add(4, 5) //arguments

// function add(a, b) {
//     return a + b
//     console.log('hi there this is unreachable code') //console not visible since it is after return
// }

// // var result = add(4, 6)

// // console.log(result)

// console.log(add(4, 1))

// function add(a, b) {
//     console.log(a)
//     // debugger; //stops the code at this point of execution
//     console.log(a + b)
// }

// // console.log(add)
// add(4, 5)



// var result = add(4, 3)

// console.log(result)

// function add(a, b) {
//     return a + b
// }


// function abc() { //scope of a,b is abc function
//     var a = 10
//     var b = 20
//     console.log(a, b, "inside abc")
//     console.log(x)
// }

// var x = 10 //scope of x is global
// abc()
// console.log(a, b, 'Inside global')


var x = 10

function a() {
    var y = 20
    function b() {
        console.log(x, y)
    }
    b()
}
a()