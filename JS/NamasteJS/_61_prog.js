// infinite currying

function add (a) {
    return (b) => {
        if (b !== undefined) {
            return add(a + b);
        }
        return a;
    }
}

console.log(add(2)(3)(4)(5)())

function curry(fn) {
    return curried = (...args) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args);
        } else {
            return fn.apply(null, args);
        }
    }
}

const total = (x, y, z) => x + y + z;
const curriedTotal = curry(total);
console.log(curriedTotal(1)(2)(3));