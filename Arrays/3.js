const prompt = require('prompt-sync')()
//reverse the array
let arr = [1,2,3,4,5]
function reverse(a){
    let i = 0;
    let j  = arr.length-1
    while(i<j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    return arr
}

// console.log(reverse(arr))



//all zeros to left all zeros to right

function moveZeros(){
    let arr = [1,0,1,0,1,1,0,0,1,1,0,0]
    
    let j = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]!==1){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
       j++
    }
    
    }
    return arr
}

// console.log(moveZeros())

//arrays left rotation by 1

function leftRotation(){
    let arr = [1,2,3,4,5]

    let copy = arr[0]
    for(let i =0;i<arr.length;i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = copy
    return arr
}

// console.log(leftRotation())

//array left rotation by k elements 
let nums = [1,2,3,4,5,6]
let k = Number(prompt("Please enter a number"))
k= k%arr.length
k_rotation(nums,0,k-1)
k_rotation(nums,k,nums.length-1)
k_rotation(nums,0,nums.length-1)

function k_rotation(nums,i,j){
    while(i<j){
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
        i++
        j--
    }
    
}

console.log(nums)

