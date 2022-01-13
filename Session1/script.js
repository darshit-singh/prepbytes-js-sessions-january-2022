//GLOBAL execution context.
var a = 4;
// debugger; // allows me to stop execution at this line.

console.log(a * 3);

function multiplyBy2(num) { //parameter
    // return num * 2;
    console.log(num * 2); //printing twice the value of num.
}

//function invocation - calling the function.
// calling the function in order to execute.

multiplyBy2(a);

//keywords - var, function, for, while

//predefined function names built in browser - innerWidth, setTimeout