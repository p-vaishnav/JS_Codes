// currying in js

// Akshay's method by using bing method

const multiply = function(x, y) {
    console.log(x * y);
}

// presetting first argument
const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

const multiplyByThree = multiply.bind(this, 3);
multiplyByThree(6);

// Dave's first program related to andwich making
const makeSandWich = function (ingredient1) {
    return (ingredient2) => {
        return (ingredient3) => {
            console.log(`${ingredient1} -> ${ingredient2} -> ${ingredient3}`)
        }
    }
}
makeSandWich('Bread')('Eggs')('Sauce');

// much cleaner way to make sandwich
const makeSandWichEasy = ing1 => ing2 => ing3 => console.log(`${ing1} -> ${ing2} -> ${ing3}`);
makeSandWichEasy('Bread')('Potato')('Cheese')

// currying takes a function with more than one parameter and breaks it into series of unary one parameter functions

const curriedMultiply = x => y => y * x;
console.log(curriedMultiply(2)(3));

// function composition
console.log('-----------------------------------');
const addCustomer  = fn => (...args) => {
    console.log('saving customer info...');
    return fn(...args);
}

const processOrder = fn => (...args) => {
    console.log(`processing order #${args[0]}`)
    return fn(...args);
}

let completeOrder = (...args) => {
    console.log(`Order #${[...args].toString()} completed`);
}

completeOrder = processOrder(completeOrder)
console.log(completeOrder);
completeOrder = addCustomer(completeOrder);
completeOrder('10000');

// creating a curried function
const curry = (fn) => {
    return curried = (...args) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args);
        }
        return fn(...args);
    }
}
console.log('------------------------------------');
const total = (x, y, z) => x + y + z;
const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));
console.log(curriedTotal(10)(20, 30));
console.log(curriedTotal(10, 20, 30))
