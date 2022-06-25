// let nums = [0,0,1,1,1,2,2,3,3,4];
// let nums1 = [];
// let cnt = 0;

// function duplicate(nums) {
//     for (let i=0; i<nums.length; i++){
//         if(nums[i] != nums[i+1]){
//             nums1.push(nums[i]);
//             cnt += 1;
//         }
//     }
//     len = nums.length - nums1.length;
//     for (let j=0 ; j< len; j++){
//         nums1.push("_");
//     }
// };
// duplicate(nums);
// console.log("\n",cnt,"\n nums1 = ",nums1);

function res(nums){
    let cnt = 0;
    for (let i=0; i<nums.length ; i++){
        if(nums[i] != nums[i+1]){
            nums[cnt] = nums[i];
            cnt += 1;
        }
    }
    return cnt;
}
let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(nums);
console.log(res(nums));
console.log(nums);
