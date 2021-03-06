// let user = {
//     name1: 'Rahul',
//     sayHi: function () {
//         console.log('hi!')
//     }
// }

// dot notation
// console.log(user.name1)

// square bracket notation
// console.log(user["name1"])

// console.log(user.sayHi) // function code as the "value" - rhs

// user.sayHi(); // paranthesis () is used for executing the function

// let user = {
//     name1: 'Rahul',
//     sayHi: function () {
//         return "hi"
//     }
// }

// let output = user.sayHi()
// console.log(output)

// console.log(user.sayHi())


// let user = {
//     name1: "rahul",
//     sayHi: function () {
//         console.log('Hi', user.name1)
//     }
// }

// user.sayHi()

// let user = {
//     name1: "rahul",
//     sayHi: function () {
//         console.log('Hi', user.name1)
//     }
// }

// let admin = user

// user = null;

// admin.sayHi()

// let user = {
//     name1: "rahul",
//     sayHi: function () {
//         console.log(this, '******')
//         console.log('Hi', this.name1)
//     }
// }
// user.sayHi() //hi rahul // when user contains object ref

// let admin = user //value of user is put into admin

// user = null;

// admin.sayHi() // hi rahul, //when admin contains object ref

// var name1 = 'Arpan'
// // console.log(this)
// function sayHi() {
//     console.log(this, 'THIS')
//     console.log(this.name1)
// }
// let user = {
//     name1: 'Rahul'
// }

// let admin = {
//     name1: 'Aditi'
// }

// // user.userFunction = sayHi; //I'm creating a 'userFunction' key in the object refered by user
// // admin.adminFunction = sayHi;
// user.commonFunction = sayHi; //I'm creating a 'userFunction' key in the object refered by user
// admin.commonFunction = sayHi;
// // sayHi() // called from global, global is the same as window in your browser.

// // console.log(admin.adminFunction) //function definition stored in the adminFunction key

// // admin.adminFunction();
// // user.userFunction();

// admin.commonFunction();
// user.commonFunction();
// sayHi()


// var name1 = 'Subodh'
// let user = {
//     name1: 'Aditi',
//     sayHi: () => {
//         // console.log(this)
//         console.log('Hi', this.name1)
//     }
// }

// user.sayHi() // undefined because this doesn't work with arrow functions


// let ladder = {
//     step: 0,
//     up: function () {
//         this.step++;
//     },
//     down: function () {
//         this.step--;
//     },
//     showStep: function () {
//         console.log(this.step)
//     }
// }

// ladder.up()
// ladder.up()
// ladder.showStep() //expected output 2
// ladder.down()
// ladder.showStep() //expected output 
