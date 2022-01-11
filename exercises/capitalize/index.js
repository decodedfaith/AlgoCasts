// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // let result = '';
    // for ( let char of str.trim()){
        
    //     if(str[0] === char){
    //         result += char.toUpperCase();
    //     }else {
    //         if(result[result.length-1] === ' '){
    //             result += char.toUpperCase();
    //         }else{
    //             result+= char;
    //         }
    //     }
        
    // }

    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++){
        if (str[i-1] === ' ') {
            result += str[i].toUpperCase();
        }else {
            result += str[i];
        }
    }

    return result;
}

module.exports = capitalize;


// Solution 1
// function capitalize(str) {
//     const capitalizedArrayStr = [];
//     for(let word of str.split(' ')){
//         capitalizedArrayStr.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return capitalizedArrayStr.join(' ');
// }

// Solution 2
// function capitalize (str){
//     let result = str[0].toUpperCase();

//     for (let i = 1; i < str.length; i++){
//         if (str[i-1] === ' ') {
//             result += str[i].toUpperCase();
//         }else {
//             result += str[i];
//         }
//     }

//     return result;
// }