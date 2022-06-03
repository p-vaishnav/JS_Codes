// what are prototype in js
const myObject = {
    movie: 'The Fight Club'
}

// myObject.__proto__ points to the property named Prototype function labelled as Object
// myObject.__proto__ === Object.prototype -> true

console.log(myObject.movie);
console.log(myObject.hasOwnProperty('movie'));


const myFunction = function() {
    console.log('success');
}

myFunction.key = 'Patience';

// myFunction.__proto__ === Function.prototype -> true

console.log(myFunction.toString());
console.log(myFunction.key);
console.log(myFunction.hasOwnProperty('key'));

// Object is a Function in JS