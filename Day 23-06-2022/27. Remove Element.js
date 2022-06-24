let arr = [0,1,2,2,3,0,4,2];
let target = 2;
let cnt = 0;
let empty = [];

for (let i=0 ; i<arr.length ; i++){
    if (arr[i] === target){
        empty.push('_');
    }
    else {
        empty.push(arr[i]);
        cnt += 1;
    }
}

console.log("Left element is = ",cnt,"\n Array is = ",empty);