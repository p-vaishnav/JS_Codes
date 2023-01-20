// splice method of an array
const _arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// splice (start, no-elements-to-be-removed, ...no of elements should be added)
// returns an [] of removed elements, and modifies the orifinal array
_arr.splice(1, 3, '1', '2', '3');
console.log(_arr);

console.log('-------------------------------------------------');
// slice
// returns the inbound array and never modifies the original one
console.log(_arr.slice(2));
console.log(_arr.slice(2, 6));
console.log(_arr);