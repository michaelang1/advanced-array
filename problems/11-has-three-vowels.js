/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    let letters = string.split('');
    let vowels = 'aeiou';
// // method 1: using array.reduce()
//     let uniqueVowels = letters.reduce(function(accum, letter) {
//         if (vowels.includes(letter) && !accum.includes(letter)) {
//             return accum += letter;
//         } else {
//             return accum;
//         }
//     }, '');

// method 2: using array.forEach()
    let count = 0;
    let uniqueVowels = '';

    letters.forEach(function(letter) {
        if (vowels.includes(letter) && !uniqueVowels.includes(letter)) {
            count++;
            uniqueVowels += letter;
        }
    });

// return boolean
    return uniqueVowels.length >= 3;

};

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false


// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
