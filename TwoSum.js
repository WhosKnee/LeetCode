/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // use a hash table so that we only have to traverse once
    let numsMap = new Map();
    for (i = 0; i < nums.length; i++){
        // check if the hash table has the complement of target - nums[i]
        complement = target - nums[i];
        if(numsMap.has(complement)){
            // note that we can garuntee that the stored index is less than i
            return [numsMap.get(complement), i];
        }
        // if the hash did not have the value, add it to the table
        numsMap.set(nums[i], i)
    }
};

TwoSum = twoSum([2,7,1,3], 9);
console.log(TwoSum);