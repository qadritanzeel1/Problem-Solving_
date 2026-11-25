//bubble sort

function bubble(){
    let arr = [5,4,65,64,62,81,73];
   
    let n = arr.length

    for(let i=0;i<n-1;i++){
        for(let j =0;j<n-i-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
            }
        }
    }
console.log(arr)
}

// bubble()



function selectionSort(){
    let arr = [1,4,3,2,9,10]

    for(let i =0;i<arr.length-1;i++){
        let small = i
        for(let j =i+1;j<arr.length;j++){
            if(arr[small]>arr[j]){
                small = j
            }
        }
        if(small!==i){
            let temp = arr[i];
            arr[i] = arr[small]
            arr[small] = temp
        }

    }
    return arr
}

console.log(selectionSort())