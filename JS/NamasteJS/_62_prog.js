// difference between Map and ForEach
// both are array traversal function
// main difference between each is map returns a new array while forEach is used modifies the array via index
// map returns a new array forEach doesn't return anything


const nums = [1, 2, 3, 4, 5, 6, 7];
const mapResult = nums.map((item) => item*2);
console.log('------------------------------------');
console.log(mapResult);
console.log('-----------------------------------');

const forEachResult = nums.forEach((item) =>  item + 2);
console.log(forEachResult);
console.log('--------------------------------------')
// forEach is used to modify array in place
nums.forEach((item, i) => {
    nums[i] = nums[i] + 2;
});
console.log(nums);
// chaining is supported on map as it returns a map