//matrix diagonal sum 

function diagonalSum(){
    
let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,10]
];

let Lsum = 0
let Rsum = 0

for(let i =0;i<arr.length;i++){
    for(let j =0;j<arr[i].length;j++){
        if(i==j){
            Lsum = Lsum + arr[i][j]
        }
        if(i+j === arr.length-1){
            Rsum = Rsum + arr[i][j]
        }
    }
}

console.log(Lsum)
console.log(Rsum)
}

diagonalSum()