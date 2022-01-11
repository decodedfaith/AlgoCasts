// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var charObj = {};
    let max = 0;
    let charMax ='';
    
    for ( let char of str){
        if(charObj[char]){
            charObj[char]++;
        }else{
            charObj[char] = 1;
        }
    }

    for(let char in charObj){
        if(charObj[char] > max ){
            max = charObj;
            charMax = char;
        }
    }

    return charMax;
}

module.exports = maxChar;
