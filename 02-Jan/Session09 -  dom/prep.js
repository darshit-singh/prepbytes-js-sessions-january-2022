//Where javascript runs is called the host environment - ex. browser, server(node-js)
// A host environment provides own objects and functions additional to the language core. Web browsers give a means to control web pages. Node.js provides server-side features, and so on.

// DOM - document object model
// represents all page content as objects that can be modified. We can change or create anything on the page using it.

// The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.
// console.log(window.location)


// The backbone of an HTML document is tags.

// According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one.
// All these objects are accessible using JavaScript, and we can use them to modify the page.

// For example, document.body is the object representing the <body> tag.
// document.body.style.background = 'red' //makes background red
// document.body.style.color = 'white' //makes text color white



// dom tree
// Every tree node is an object.
// Tags are element nodes (or just elements) and form the tree structure: <html> is at the root, then <head> and <body> are its children, etc.

// The text inside elements forms text nodes, labelled as #text. A text node contains only a string. It may not have children and is always a leaf of the tree.

// console.log(document.getElementsByTagName('*')) //child text and b

// document.body.style.background = 'red' // show in objects

// The DOM allows us to do anything with elements and their contents, but first we need to reach the corresponding DOM object.

// All operations on the DOM start with the document object. That’s the main “entry point” to DOM. From it we can access any node.

// console.log(document) //whole document
// console.log(document.documentElement) //html
// console.log(document.body) //body

// ------Children
// Child nodes (or children) – elements that are direct children. In other words, they are nested exactly in the given one. For instance, <head> and <body> are children of <html> element.

// Descendants – all elements that are nested in the given one, including children, their children and so on.
// <div>Begin</div>
//   <ul>
//   <li>
//     <b>Information</b>
//   </li>
// </ul>

// And descendants of <body> are not only direct children <div>, <ul> but also more deeply nested elements, such as <li> (a child of <ul>) and <b> (a child of <li>) – the entire subtree.

//****** The childNodes collection lists all child nodes, including text nodes

// for (let i = 0; i < document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[i]);
// }

// Properties firstChild and lastChild give fast access to the first and last children.

// They are just shorthands. If there exist child nodes, then the following is always true:

// elem.childNodes[0] === elem.firstChild
// elem.childNodes[elem.childNodes.length - 1] === elem.lastChild

// There’s also a special function elem.hasChildNodes() to check whether there are any child nodes.
// console.log(document.body.hasChildNodes())


// ---------DOM COLLECTIONS
// As we can see, childNodes looks like an array. But actually it’s not an array, but rather a collection – a special array-like iterable object.

//1. We can use for..of to iterate over it:
// for (let node of document.body.childNodes) {
//     console.log(node); // shows all nodes from the collection
// }

// 2.Array methods won’t work, because it’s not an array:

// console.log(document.body.childNodes.filter); //undefined, there's no filter

// The first thing is nice. The second is tolerable, because we can use Array.from to create a “real” array from the collection, if we want array methods:

// console.log(Array.from(document.body.childNodes).filter); //function

// ------------NOTE
// 1.
// DOM collections, and even more – all navigation properties listed in this chapter are read-only.

// We can’t replace a child by something else by assigning childNodes[i] = ....

// Changing DOM needs other methods. We will see them in the next chapter.

// 2.
// Almost all DOM collections with minor exceptions are live. In other words, they reflect the current state of DOM.

// If we keep a reference to elem.childNodes, and add/remove nodes into DOM, then they appear in the collection automatically.

// ---------SIBLING AND THE PARENT
// Siblings are nodes that are children of the same parent.
// For instance, here <head> and <body> are siblings:

// <body> is said to be the “next” or “right” sibling of <head>,
// <head> is said to be the “previous” or “left” sibling of <body>

// The next sibling is in nextSibling property, and the previous one – in previousSibling.
// The parent is available as parentNode.

// console.log(document.body.parentNode === document.documentElement); // true

// after <head> goes <body>
// console.log(document.head.nextSibling.nextSibling); // HTMLBodyElement, because of formatting, text comes in between

// before <body> goes <head>
// console.log(document.body.previousSibling.previousSibling); // HTMLHeadElement, becasue of formatting text comes in between

//--------- ELEMENT ONLY NAVIGATION
// Navigation properties listed above refer to all nodes. For instance, in childNodes we can see both text nodes, element nodes, and even comment nodes if they exist.

// But for many tasks we don’t want text or comment nodes. We want to manipulate element nodes that represent tags and form the structure of the page.
// diagram ...
//1. children – only those children that are element nodes.
//2. firstElementChild, lastElementChild – first and last element children.
//3. previousElementSibling, nextElementSibling – neighbor elements.
//4. parentElement – parent element.


// console.log(document.body.firstElementChild.nextElementSibling.firstElementChild) //first li
// console.log(document.body.firstElementChild.nextElementSibling.firstElementChild.parentElement) //ul

// The parentElement property returns the “element” parent, while parentNode returns “any node” parent. These properties are usually the same: they both get the parent.

// With the one exception of document.documentElement:

// console.log(document.documentElement.parentNode); // document
// console.log(document.documentElement.parentElement); // null
// The reason is that the root node document.documentElement (<html>) has document as its parent. But document is not an element node, so parentNode returns it and parentElement does not.

// This detail may be useful when we want to travel up from an arbitrary element elem to <html>, but not to the document:


// Let’s modify one of the examples above: replace childNodes with children. Now it shows only elements:
// for (let elem of document.body.children) {
//     console.log(elem); // DIV, UL, DIV, SCRIPT
// }

// --------access aman
// console.log(document.body.lastElementChild.previousElementSibling.lastElementChild)//aman
// console.log(document.body.children[2].children[2]) //aman



// -----------question
// If elem – is an arbitrary DOM element node…

// Is it true that elem.lastChild.nextSibling is always null?
// Is it true that elem.children[0].previousSibling is always null ?

//1. Yes, true. The element elem.lastChild is always the last one, it has no nextSibling.
//2. No, wrong, because elem.children[0] is the first child among elements. But there may exist non-element nodes before it. So previousSibling may be a text node.














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
