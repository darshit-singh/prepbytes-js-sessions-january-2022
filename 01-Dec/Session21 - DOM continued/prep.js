// DOM navigation properties are great when elements are close to each other. What if they are not? How to get an arbitrary element of the page?

// For that we use:

// 1. document.getElementById
// If an element has the id attribute, we can get the element using the method document.getElementById(id), no matter where it is.

// document.getElementById('rahul').style.background = 'red'

// NOTE - The id must be unique
// The id must be unique. There can be only one element in the document with the given id.

// If there are multiple elements with the same id, then the behavior of methods that use it is unpredictable, e.g. document.getElementById may return any of such elements at random. So please stick to the rule and keep id unique.




// 2. document.querySelector
// The call to elem.querySelector(css) returns the first element for the given CSS selector.

// let element = document.querySelector('li') //querySelector gives the first element of that selector
// console.log(document.querySelector('ul').childNodes)
// console.log(element)


// 3. document.querySelectorAll
// let elements = document.querySelectorAll('li')
// console.log(elements) // nodeList

// looping over the node list - you may take out all the IDs, etc, perform operations on it.
// for(const elem of elements) {
//     console.log(elem)
// }

// taking out id's 
// for(const elem of elements){
//     if(elem.id === 'rahul1')
//     console.log(elem)
// }
// -----------question take out a unique id
// console.log(Array.from(document.querySelectorAll('li')).filter(elem => elem.id === 'rahul1'))


// let elements = document.querySelectorAll('ul') //even though there is only one ul tag in our file, querySelectorAll still gives us a NodeList

// NOTE ------
// In other words, the result is the same as elem.querySelectorAll(css)[0], but the latter is looking for all elements and picking one, while elem.querySelector just looks for one. So it’s faster and also shorter to write.

// console.log(document.querySelectorAll('.users')) //this also takes out all uls with that class


// 4. getElementsByClassName
// console.log(document.getElementsByClassName('users')) // returns an HTML collection

//************ HTMLCollection is LIVE and NodeList is static

// console.log(document.querySelectorAll('.users')) //returns nodeList which is static

// 5. getElementsByTagName
// let divs = document.getElementsByTagName('div');
// console.log(divs)
// console.log(document.getElementsByTagName('*')) // gets everything



// ---------LIVE COLLECTIONS
// All methods "getElementsBy*" return a live collection. Such collections always reflect the current state of the document and “auto-update” when it changes.

// In the example below, there are two scripts.

// The first one creates a reference to the collection of <div>. As of now, its length is 1.
// The second scripts runs after the browser meets one more <div>, so its length is 2.

{/* <div>First div</div>

<script>
  let divs = document.getElementsByTagName('div');
  console.log(divs.length); // 1
</script>

<div>Second div</div>

<script>
  console.log(divs.length); // 2
</script> */}

// --------------innerHTML
// The innerHTML property allows to get the HTML inside the element as a string.
// We can also modify it. So it’s one of the most powerful ways to change the page.

// document.querySelector('#rahul1').innerHTML = 'Ravi'

// -------------outerHTML
// The outerHTML property contains the full HTML of the element. That’s like innerHTML plus the element itself.
// console.log(document.querySelector('#rahul1').outerHTML)
// document.querySelector('#rahul1').outerHTML ='<p>hehe</p>' //changes the actual element in dom

// ------------innerText
// console.log(document.querySelector('#test').innerText)
// console.log(document.querySelector('#test').innerHTML)

// ------------------some theory on outerHTML, important
// The outerHTML assignment does not modify the DOM element (the object referenced by, in this case, the variable ‘div’), but removes it from the DOM and inserts the new HTML in its place.

// So what happened in div.outerHTML=... is:

// div was removed from the document.
// Another piece of HTML <p>A new element</p> was inserted in its place.
// div still has its old value. The new HTML wasn’t saved to any variable.
// It’s so easy to make an error here: modify div.outerHTML and then continue to work with div as if it had the new content in it. But it doesn’t. Such thing is correct for innerHTML, but not for outerHTML.

// We can write to elem.outerHTML, but should keep in mind that it doesn’t change the element we’re writing to (‘elem’). It puts the new HTML in its place instead. We can get references to the new elements by querying the DOM.


//-------------- Modifying the document
// You can create an element using
// let div = document.createElement('div') //creation of div

// div.className = 'newDiv'

// .newDiv{
//     color: red;
//     border: 1px solid red;
//     background-color: rgba(255, 0, 0, 0.1);
// }
// div.innerHTML = 'Hello there! <b>This text is bold</b>';

// We’ve created the element. But as of now it’s only in a variable named div, not in the page yet. So we can’t see it.

// -----------Insertion methods

// To make the div show up, we need to insert it somewhere into document. For instance, into <body> element, referenced by document.body.

// There’s a special method append for that: document.body.append(div).

// document.body.append(div) //adds at the end of body
// document.body.prepend(div) //adds at the end of body
// document.body.before(div) //adds node before

// ---------add before paragraph
// document.getElementById('test').before(div)
// document.querySelector('#test').before(div)

// node.append(...nodes or strings) – append nodes or strings at the end of node,
// node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
// node.before(...nodes or strings) –- insert nodes or strings before node,
// node.after(...nodes or strings) –- insert nodes or strings after node,
// node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.

// document.getElementById('test').replaceWith(div)
