// multiply all the numeric values by 2 present in nums object
let nums = {
    n1: 10,
    n2: 20,
    n3: 30,
    n4: 'success'
}

function multiplyByTwo(nums) {
    for(key in nums) {
        if (typeof nums[key] === 'number') {
            nums[key] = nums[key]*2
        }
    }
    return nums;
}
console.log(multiplyByTwo(nums));