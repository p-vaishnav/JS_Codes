// function currying basic example

function sum(a, b) {
    return a + b;
}

function curry(f) {
    return function(a) {
        return function(b) {
            return f(a ,b);
        }
    }
}

_curriedFun = curry(sum);
console.log(_curriedFun(10)(20));