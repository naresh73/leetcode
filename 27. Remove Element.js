function rm(arr,val){
    for (let i = 0 ; i<arr.length ; i++){
        if (arr[i] === val){
            arr[i] ="_";
        }
        // console.log(arr[i]);
    }
    return arr;
}
let arr = [2,9,4,7,7,3,1];
let val = 7;
console.log(rm(arr,val));