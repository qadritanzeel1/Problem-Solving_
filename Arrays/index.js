let prompt = require("prompt-sync")()

// sum of arrays elements

// let arr = [34,56,78,123,1234,13]
// let sum = 0

// for(let i =0;i<arr.length;i++){
//     sum = sum + arr[i]
// }

// console.log(sum)

// maximum element from the array

// let arr = [23,45,78,99,123,567,12]

// let max = arr[0]

// for(let i = 1;i<arr.length;i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }
// }

// console.log(max)


//second max element

// let arr =  [11,35,67,44,88,98];

// let max = Math.max(arr[0],arr[1])
// let smax = Math.min(arr[0],arr[1])

// for(let i =2;i<arr.length;i++){
//     if(arr[i]>max){
//         smax = max;
//         max = arr[i]
//     }else if(max!==arr[i] && arr[i]>smax){
//         smax = arr[i]
//     }
// }

// console.log(smax)

//reverse the array with extra variable

// let arr = [1,2,3,4,5,6]
// let rev = []

// for(let i =arr.length-1;i>=0;i--){
//     rev.push(arr[i])
// }

// console.log(rev)

// reverse the variable without extra variabe

// let arr = [1,2,3,4,5]
// let i =0
// let j=arr.length-1

// while(i<j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++
//     j--
// }

// console.log(arr)

//  All zeroes to left and all ones to right

// let arr = [1,1,1,0,1,0,1,0,1,0,1,0]

// let j =0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==0){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
// }

// console.log(arr)

// Array left Rotation by 1

// let arr = [1,2,3,4,5]

// let copy = arr[0]

// for(let i = 0;i<arr.length;i++){
//     arr[i] = arr[i+1]
// }

// arr[arr.length-1] = copy

// console.log(arr)

// array left rotation by k elements 

// let arr = [1,2,3,4,5,6]
// let k = Number(prompt("Please enter steps to move left"))
// let i = 0
// while(i<k){
// let copy = arr[0]

// for(let j =0;j<arr.length;j++){
//     arr[j] = arr[j+1]
// }
// i++
// arr[arr.length-1] = copy
// }

// console.log(arr)


//optimised approach

let arr = [1,2,3,4,5]

let k = Number(prompt("Please enter a number"))
k=k%arr.length;
reverse(arr,0,k-1)
reverse(arr,k,arr.length-1)
reverse(arr,0,arr.length-1)

console.log(arr)
function reverse(arr,i,j){
while(i<j){
    let temp = arr[i]
arr[i] = arr[j]
arr[j] = temp
i++
j--
}
}