// creating a curried function
/*const curry = (fn) => {
    return curried = (...args) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args);
        }
        return fn(...args);
    }
}*/


// another implementation
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}
console.log('------------------------------------');
const total = (x, y, z) => {
    return x + y + z;
} 
const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));
console.log(curriedTotal(10)(20, 30));
console.log(curriedTotal(10, 20, 30))