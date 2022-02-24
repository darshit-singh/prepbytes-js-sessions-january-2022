// document.body.style.background = 'red'
// document.body.style.color = 'white'

// console.log(document) //whole document

// console.log(document.documentElement) // <html>

// console.log(document.body)

// child nodes (or children)

// console.log(document.body.childNodes)

// for (let i = 0; i < document.body.childNodes.length; i++)
//     console.log(document.body.childNodes[i])

// console.log(document.body.childNodes[0], '0th Index')
// console.log(document.body.firstChild, 'FirstChild')

// document.body.childNodes[0].style.backgroundColor = 'red'
// document.body.firstChild.style.backgroundColor = 'red'

// console.log(Array.from(document.body.childNodes).filter) //childNodes is NOT an array

// for of loop - for Nodes

// for (let node of document.body.childNodes) {
//     console.log(node)
// }

// console.log(document.body.previousSibling)
// console.log(document.body.previousElementSibling)

// console.log(document.body.firstElementChild)
// console.log(document.body.lastElementChild)

// console.log(document.body.lastElementChild.previousElementSibling.firstElementChild)//rahul
// console.log(document.body.lastElementChild.previousElementSibling.firstElementChild.nextElementSibling)//aditi
// console.log(document.body.lastElementChild.previousElementSibling.lastElementChild) //aman
// console.log(document.body.lastElementChild.previousElementSibling.lastElementChild.previousElementSibling) //aditi using aman

// console.log(document.body.firstElementChild) //h1
// console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild) //h1

// looping over elements
// for(let element of document.body.children) {
//     console.log(element)
// }

