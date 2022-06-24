const nums = [0,1,2,2,3,0,4,2];
const val = 2;
// const val = 3;
// Output: 2, nums = [2,2,_,_]

const res = [];
let count = 0;

for (let i = 0 ; i < nums.length; i++){
    if(nums[i] === val){
        res.push('_');
    } else {
        count += 1;
        res.push(nums[i]);
    }
}

console.log(res, count);