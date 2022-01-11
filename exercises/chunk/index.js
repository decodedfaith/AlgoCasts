// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunckedArray = [];
    let index = 0;
    while (index < array.length){
        chunckedArray.push(array.slice(index, index+size));
        index+=size;
    }
    return chunckedArray;
}


module.exports = chunk;


// Solution 1
// function chunk(array, size) {
//     let chunckedArray = [];
//     let chunks = [];
//     for(char of array){
//         if(chunks.length < size){
//             chunks.push(char);
//             if(chunks.length === size){
//                 chunckedArray.push(chunks) ;
//                 chunks=[]; 
//             }
//         }
//     }
//     if (chunks.length > 0){
//         chunckedArray.push(chunks) ;
//     }
//     return chunckedArray;
// }

//Solution 2 
// function chunk(array, size) {
//     let chunckedArray = [];
//     let index = 0;
//     while (index < array.length){
//         chunckedArray.push(array.slice(index, index+size));
//         index+=size;
//     }
//     return chunckedArray;
// }