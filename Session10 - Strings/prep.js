// let single = 'single-quoted';
// let double = "double-quoted";

// let backticks = `backticks`;
// let abc = 1000
// console.log(`Rupees ${abc} /-`);

//backticks allow us to have multiple lines
// let guestList = `Guests:
//  * Rahul
//  * Shubham
//  * Abishek
// `
// console.log(guestList);

// let guestList = "Guests:
//  * Rahul
//  * Shubham
//  * Abishek
// "

// multiline in normal quotes
// let guestList = "Guests:\n * Rahul\n * Shubham\n * Abishek";
// console.log(guestList);

// let str = "Hello-\
// I'm continuing my string in line 2-\
// this is line 3"

// console.log(str);

// let str1 = "Hello\nWorld";
// let str2 = `Hello
// World`;
// console.log(str1 === str2); // true


//escape characters
// let str1 = "Hello, how\'re you doing ?"
// let str2 = 'It\'s good to meet you'
// let str3 = '\"Hi!\"';
// let str4 = `Hello it's good to meet you, "Hi"`
// let str5 = '"HI"'
// let str6 = "'Hi'"
// let str7 = "This is backslash \\"
// console.log(str7);
// console.log(str1, str2, str3, str4, str5, str6)


// String length
// let str = 'Hello'
// console.log(str.length);

// Accessing string characters
// [ ] or charAt()

// let str = 'abc';
// console.log(str[1], str.charAt(1));

// //difference between [] and charAt, []returns undefined, charAt returns empty string.
// console.log(str[10], str.charAt(10));


//strings are immutable
// Strings can’t be changed in JavaScript. It is impossible to change a character.
// let str = 'abc'
// let str1 = str;
// str1 = str1 + 'haha'
// str[2] = 'a';
// console.log(str, str1)

// you can create a whole new string and assign it to the old one

//------------------ Concatination of the strings    [+, concat]
// let name1 = "Vijay Pratap Singh";
// let age = "22";
// let statement = name1 + " is " + age + " years old."
// let newStr = age.concat(name1);
// console.log(newStr);
// console.log(name1 + age);
// console.log(statement);

// Changing the case of the string
// let str = "Hello How Are You ?"
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str[0].toLowerCase()); // single character lowercase/uppercase

// -------Looking for a substring
//--------indexOf
// let str = 'Widget with id';

// console.log(str.indexOf('Widget')); // 0, because 'Widget' is found at the beginning
// console.log(str.indexOf('widget')); // -1, not found, the search is case-sensitive

// console.log(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)

// console.log(str.indexOf("id", 2));

//-------------------- INDEXOF LOOP

// let str = 'As sly as a fox, as strong as an ox';

// let target = 'as'; // let's look for it

// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;

//     console.log(`Found at ${foundPos}`);
//     pos = foundPos + 1; // continue the search from the next position
// }

// -------------------skip-------------------------------------
// There is a slight inconvenience with indexOf in the if test. We can’t put it in the if like this:

// let str = "Widget with id";

// if (str.indexOf("Widget")) {
//     alert("We found it"); // doesn't work!
// }
// The alert in the example above doesn’t show because str.indexOf("Widget") returns 0 (meaning that it found the match at the starting position). Right, but if considers 0 to be false.

// So, we should actually check for -1, like this:

// let str = "Widget with id";

// if (str.indexOf("Widget") != -1) {
//     alert("We found it"); // works now!
// }
// The bitwise NOT trick
// One of the old tricks used here is the bitwise NOT ~ operator. It converts the number to a 32-bit integer (removes the decimal part if exists) and then reverses all bits in its binary representation.

// In practice, that means a simple thing: for 32-bit integers ~n equals -(n+1).

// For instance:

// alert( ~2 ); // -3, the same as -(2+1)
// alert( ~1 ); // -2, the same as -(1+1)
// alert( ~0 ); // -1, the same as -(0+1)
// alert( ~-1 ); // 0, the same as -(-1+1)
// As we can see, ~n is zero only if n == -1 (that’s for any 32-bit signed integer n).

// So, the test if ( ~str.indexOf("...") ) is truthy only if the result of indexOf is not -1. In other words, when there is a match.

// People use it to shorten indexOf checks:

// let str = "Widget";

// if (~str.indexOf("Widget")) {
//   alert( 'Found it!' ); // works
// }
// It is usually not recommended to use language features in a non-obvious way, but this particular trick is widely used in old code, so we should understand it.

// Just remember: if (~str.indexOf(...)) reads as “if found”.

// To be precise though, as big numbers are truncated to 32 bits by ~ operator, there exist other numbers that give 0, the smallest is ~4294967295=0. That makes such check correct only if a string is not that long.

// Right now we can see this trick only in the old code, as modern JavaScript provides .includes method (see below).

// -----------------includes()
// console.log("Widget".includes("id")); // true
// console.log("Widget".includes("id", 3)); // false, from position 3 there is no "id"

// --------------slice()
// let str = "stringify";
// console.log(str.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
// console.log(str.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0
// console.log(str.slice(2)); // 'ringify', starts at 2 and goes till the end
// console.log(str.slice(-4, -1)); // 'gif', starts at -4 and goes till -1 (excluded)


// -------------substring()
// let str = "stringify";

// these are same for substring
// console.log( str.substring(2, 6) ); // "ring"

// console.log( str.substring(6, 2) ); // "ring"
// If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; See example below.

// 1.> split : which converts your string to an array
// -------------split
// let name1 = "Mayank";
// let aplhabet = "Hello how are you?"
// const splitStr = name1.split("")
// const splitStr2 = aplhabet.split(" ")

// console.log(splitStr, splitStr2);

// 2.> reverse : reverse all the values present inside it
// const reversedArr = splitStr.reverse();
// console.log("Reversed Array", reversedArr);

// 3.>  join   : convert the array to string
// const strOutput = reversedArr.join("*");
// console.log("Output", strOutput);


// const temp = "John is a good guy. John is working as a developer";
// console.log(temp);
// console.log(temp.replace("John", "Doe"));    // it will replace only the first occurence
// console.log(temp.replaceAll("John", "Doe")); // it will replace all the occurences

// Trim : this function removes the unnecessary spaces present in the string at the start and at the end
// const str = "           Elevation----Academy           "
// console.log(str);
// console.log(str.trim());





// ----------COMPARING STRINGS
// strings are compared character-by-character in alphabetical order.
// 1.A lowercase letter is always greater than the uppercase:
// console.log('a' > 'Z'); // true

// To understand what happens, let’s review the internal representation of strings in JavaScript.

// All strings are encoded using UTF-16. That is: each character has a corresponding numeric code. There are special methods that allow to get the character for the code and back.

// str.codePointAt(pos)
// Returns the code for the character at position pos:

// // different case letters have different codes
// console.log( "z".codePointAt(0) ); // 122
// console.log( "Z".codePointAt(0) ); // 90

// console.log(String.fromCodePoint(65)); // A


// The call str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules:

//1. Returns a negative number if str is less than str2.
//2. Returns a positive number if str is greater than str2.
//3. Returns 0 if they are equivalent.