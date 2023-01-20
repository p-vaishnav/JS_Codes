// array methods

const qualities = ['Success', 'Excellence', 'Patience', 'Hard-Work', 'Focus', 'Remove-expectations-from-every-walk-of-life'];

// toString - just returns the string
console.log(qualities.toString());

// joins the array element with this delimiter
console.log(qualities.join('**'));

// pop - removes the last element of the array, and modifies the array
console.log(qualities.pop());
console.log(qualities);

const arr = [];
console.log(arr.pop()); // returns undefined

// push - adds last element to the array, modifies the array and returns the new length of the array
console.log(qualities.push('Remove-expectations-from-every-walk-of-life'));
console.log(qualities.push(...['TBW', 'Giving 100%'])); // if spread operator is not given complete array will be pushed
console.log(qualities);

// shift removes element from first index and lower's down the index-level of subsequent elements, we get the first element as output
console.log(qualities.shift());
console.log(qualities);

// unshift add the element on the first-index, and returns the length of the array
console.log(qualities.unshift('oneThingAtATime'));
console.log(qualities);

