//revision bubble sort, selection sort , insertion sort

function bubble(){
    let arr  = [1,4,3,2,8,6,5]
    let n =arr.length
    for(let i =0;i<n-1;i++){
        for(let j =0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    return arr
}
// console.log(bubble())

//selection sort


function selectionSort(){
    let arr = [18,12,19,14,7,10,11,16,15,17]

    let n = arr.length

    for(let i =0;i<n-1;i++){
        let minIndex = i
        for(let j = i+1;j<n;j++){
            if(arr[minIndex]>arr[j])  minIndex = j
        }
        if(arr[minIndex]!==i){
            let temp = arr[minIndex]
            arr[minIndex] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

console.log(selectionSort())