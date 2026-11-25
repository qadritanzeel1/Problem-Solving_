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

bubble()