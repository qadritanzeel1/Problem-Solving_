let prompt = require('prompt-sync')()
// take arrays dynamcally 
let size = Number(prompt("Enter array size"))
let arr = new Array(size)

for(let i =0;i<arr.length;i++){
arr[i] = Number(prompt(`enter element at index ${i}:`))

}

//finding the largest among them 

let max = arr[0]
for(let i =0;i<arr.length;i++){
    if(max<arr[i]){
        max = arr[i]
    }
}

console.log(max)
