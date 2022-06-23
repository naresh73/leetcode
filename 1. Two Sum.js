var arr = [23,45,67,9,0];
var output = [];
var target = 32;

function result(arr,output,target){
    for (let i = 0 ; i < arr.length ; i++ ){
        for (let j = i+1; j < arr.length ; j++){
            if (arr[i] + arr[j] == target){
                output.push(i,j);
            }    
        }
        
    }
    return output;
}

console.log(result(arr,output,target));