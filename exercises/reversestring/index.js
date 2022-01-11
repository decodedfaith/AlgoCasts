// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // let reversed = '';
   return str.split('').reduce((rev, char )=> char+rev, '');
}

module.exports = reverse;

//Solution 1
// function reverse(str) {
//     // str = str.trim();
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--){
//         reversed += str[i];
//     }
//     return reversed;
// }

//Solution 2
// function reverse(str) {
//     return str.split('').reverse().join('');
//   }

//Solution 3
// function reverse(str) {
//     return str.split('').reduce((rev, char)=> char + rev, '');
// }

//Solution 4
// function reverse(str) {
//     return str.split('').reduce((rev, char)=> char + rev, '');
// }

//Solution 5
// function reverse(str) {
//     let reversed = '';
//     for ( char of str){
//         reversed= char + reversed;
//     }
//     return reversed;
// }