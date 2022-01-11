// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const midpoint = Math.floor((2*n-1)/2);
   for(let row = 0; row < n; row ++){
       let level ='';
       for (let column = 0; column < 2*n-1; column++){
            if(midpoint - row <= column && midpoint + row >= column){
                level+='#';
            }else{
                level+= ' ';
            }
        
        }
        console.log(level);
    }
}

module.exports = pyramid;


// Solution 1
// function pyramid(n, rows = 0, string = '') {
//     const midpoint = Math.floor((2*n-1)/2);
//     let add;
//     if(rows === n){
//         return;
//     }
//     if (string.length === n*2-1){
//         console.log(string);
//         return pyramid(n, rows + 1);
//     } 
//     if(midpoint - rows <= string.length && midpoint + rows >= string.length){
//         add = '#';
//     }else{ 
//         add = ' ';
//     }
//     pyramid(n, rows, string + add);

// }

// Solution 2 
// function pyramid(n, rows = 0, string = '') {
//     const midpoint = Math.floor((2*n-1)/2);
//     let add;

//     if(rows === n){
//         return;
//     }

//     if(string.length === 2*n-1){
//         console.log(string);
//         return pyramid(n, rows + 1);
//     }

//     if(midpoint - rows <= string.length && midpoint + rows >= string.length){
//         string += '#';
//     }else {
//         string += ' ';
//     }

//     pyramid(n, rows, string);
// }
