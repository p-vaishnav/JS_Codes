// js spread and rest operator

// some examples of spread and rest;
const odd = [1, 3, 5];
const combined = [2, 4, 6, ...odd]; // this is called spread operator
console.log(combined);

function fun(a, b, ...args) { // this is called rest operator   
    console.log(args);
}
fun(10, 20, 30, 40, 50, 60);

// desctructuring via spread operator
function fun1(a, b, c) {
    console.log(a, b, c);
}
fun1(...['a', 'b', 'c']);

// JS scread operator also work with string very properly
const key = [...'Excellence', ...'Patience'];
console.log(key);

// JS spread operators can also be used for array manipulations

// constructing literals
const chars = ['A', 'B'];
const arr = [...chars, 'C', 'D'];
console.log(arr);

// array concatenation
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const numsConcatenated = [...nums1, ...nums2];
console.log(numsConcatenated);

// copying array
const nums1Copied = [...nums1];
console.log(nums1Copied);