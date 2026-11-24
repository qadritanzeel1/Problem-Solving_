//second max element from the array



function findingmax(){

let arr = [56,67,43,32,4,12]

let max = Math.max(arr[0],arr[1])
let smax = Math.min(arr[0],arr[1])

for(let i =2;i<arr.length;i++){
    if(max<arr[i]){
        smax = max
        max = arr[i]
    }else if(arr[i]>smax && arr[i]!==max){
        smax = arr[i]
    }
}

console.log(smax)

}

findingmax()

function sumOfElements(){
    let arr = [1,45,67,89];
    let sum =0

    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }

    return sum
}

console.log(sumOfElements())