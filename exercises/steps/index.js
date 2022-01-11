// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, sign = '') {
    if(n === row){
        return;
    }

    if(n === sign.length){
        console.log(sign);
        steps(n, row + 1);
        return;
    }

    if(sign.length <= row){
        sign += '#';
    }else{
        sign += ' ';
    }
    
    steps(n, row, sign);
   
}

module.exports = steps;


// Solution 1
// function steps(n) {
//     let step = 1;
//     let sign ='';
//     let spacing ='';
//     while(step <= n){
        
//         for(let i = 1 ; i<= n-step; i++){
//             spacing+=' ';
//         }
//         sign +='#';
//         console.log(sign + spacing);
//         step++;
//         spacing = '';
//     }
// }

// Solution 2
// function steps(n) {
//     for(let row = 0; row < n; row++){
//         let steps = '';
//         for(let column = 0; column < n; column++){
//             if(column <= row){
//                 steps+= '#';
//             }else{
//                 steps+= ' ';
//             }
//         }
//         console.log(steps);
//     }
// }