let prompt = require('prompt-sync')()
//multi dimentional array


// dynamically 


// function dynamicArray(){
    
// let size  = Number(prompt("please enter size"))
// let arr = new Array(size)

// for(let i =0;i<arr.length;i++){
//     arr[i] = new Array(4)
// }

// for(let i =0;i<arr.length;i++){
//     for(let j =0;j<arr[i].length;j++){
//         arr[i][j] = Number(prompt("please enter elements"))
//     }
// }

// console.log(arr)
// }

// dynamicArray()



// one liner function 
console.log(Array.from({ length: Number(prompt("please enter size")) }, () => Array.from({ length: 4 }, () => Number(prompt("please enter elements")))));


