// console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling)

// How we access elements directly inside the DOM:
// 1. Through ID
// console.log(document.getElementById('test'))

// document.getElementById('test').style.color = 'red'


// 2. querySelector -> returns the first element for the given CSS selector

// let element = document.querySelector('div').children
// console.log(element)

// 3. querySelectorAll -> returns all the elements for the given CSS selector, ALWAYS returns a nodeList

// let elements = document.querySelectorAll('div')
// console.log(elements)

// for(const elem of elements) {
//     console.log(elem)
// }

// let lis = document.querySelectorAll('li')

// for(const li of lis) {
//     if(li.id === 'rahul1')
//         console.log(li)
// }

// console.log(Array.from(lis).filter(item => item.id === 'rahul1'))

// console.log(document.querySelectorAll('ul'))

// console.log(document.querySelector('p')) //a bit faster
// console.log(document.querySelectorAll('p')[0])


// 4. getElementsByClassName ---------> HTMLcollection
// console.log(document.getElementsByClassName('users'))

// console.log(document.querySelectorAll('.users')) // ---------> NodeList

// 5. getElementsByTagName-------> HTMLcollection
// console.log(document.getElementsByTagName('div'))

// console.log(document.getElementsByTagName('*')) //everything inside the document is returned


// ------- innerHTML
// document.getElementById('test')
// console.log(document.querySelector('#test'))

// let para = document.getElementById('test')
// console.log('innerHTML', para.innerHTML)

// -------innerText
// console.log('innerText',para.innerText)

// console.log('outerHTML', para.outerHTML)
// console.log('outerTEXT', para.outerText)

// para.innerHTML = 'This is changed paragraph <div>This is a new Div</div>'

// para.innerText = 'This is changed paragraph through innerText'




// ------------- createElement

// let newDiv = document.createElement('div')

// newDiv.innerHTML = 'Hi there!, <b>This text is bold</b>';

// newDiv.className = 'newDiv'

//1. we have created the element
//2. we want to INSERT the element into the DOM

// document.getElementById('test').before(newDiv)

// document.querySelector('p').after(newDiv)





// --------insert the element into the document
// append method

// document.body.append(newDiv)

// prepend method
// document.body.prepend(newDiv)

// before method
// document.body.before(newDiv)

// after method
// document.body.after(newDiv)