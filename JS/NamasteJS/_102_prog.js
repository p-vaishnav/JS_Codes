// polyfill of curried function

function curry(fun) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fun.call(null, a, b, c);
            }
        } 
    }
}

function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));