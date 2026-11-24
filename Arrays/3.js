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

console.log(leftRotation())


