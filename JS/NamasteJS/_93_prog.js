// array mutations

// methods

// push
// unshift
// concat
// spread operator

let numbers = [1, 2, 3];

console.log('numbers', numbers);

// mutating original array
numbers.push(4);

console.log('numbers push', numbers);

// unshift
console.log('---------------------');
numbers.unshift(5);

console.log('numbers unshift', numbers);

let morenumbers = numbers.slice();

console.log('slice - (just a shallow copy) morenumbers', morenumbers);

// concat

// shallowCopy
console.log('------------------------------');
const newNumbers = [9, 8, 7];

const moreNewNumbers = newNumbers.concat([1, 2 ,3]);

console.log('newNumbers', newNumbers);
console.log('moreNewNumbers', moreNewNumbers);