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


//strings are IMMUTABLE IN JS
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
//in substring() you CANNOT use negative arguments

// 1.> split : which converts your string to an array
// -------------split
// let name1 = 'Mayank';
// let greeting = 'Hi how are you';

// let splitStr = name1.split('') // argument for split() is a string
// let splitStr = greeting.split(' ');
// console.log(splitStr)

// let greeting = 'Hi how are you?';
// let splitStr = greeting.split(' '); //typeof splitStr -> array
// let str = splitStr.join('-');

// NOTE - split and join are chainable as well!
// let greeting = 'Hi how are you ?';
// console.log(greeting.split(' ').join('-'));


// 2.> reverse : reverse all the values present inside it
// const reversedArr = splitStr.reverse();
// console.log("Reversed Array", reversedArr);

// 3.>  join   : convert the array to string
// const strOutput = reversedArr.join("*");
// console.log("Output", strOutput);


// -----------question
// let greeting = 'Hi how are you'; //reverse this string using split join and reverse
// let newStr = ''
// for (let i = greeting.length - 1; i >= 0; i--) {
//     newStr += greeting[i];
// }
// console.log(newStr)

// console.log(greeting.split('').reverse().join('')) //reverses the whole string just like the for loop above.
// console.log(greeting.split(' ').reverse().join(' '))//reverse the order of the words.



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