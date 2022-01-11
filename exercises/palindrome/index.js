// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every(
        (char, i)=> char === str[str.length-i-1]
    );
}

module.exports = palindrome;


//Solution 1 
// function palindrome(str) {
//     return str == str.split('').reverse().join('');
//  }

//Solution 2
// function palindrome(str) {
//     return str == str.split('').reduce((rev,char)=> char+ rev, '');
//  }

//Solution 3
// function palindrome(str) {
//     var reversed = '';
//     for( var i = str.length-1; i>=0; i--){
//         reversed += str[i];
//     }
//     return str == reversed;
// }

//Solution 4
// function palindrome(str) {
//     let reversed = '';
//     for( let i of str){
//         reversed = i + reversed;
//     }
//     return str == reversed;
// }