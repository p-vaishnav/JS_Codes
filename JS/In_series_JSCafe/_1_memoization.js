function memoize(fn) {
    const cache = {};
    // a closure is a function bundled with its lexical environment
    return (...args) => {
        const argsToString = JSON.stringify(args);
        if (argsToString in cache) {
            console.log('Picking value from cache', argsToString);
        } else {
            console.log('Computing values fresh', argsToString)
            cache[argsToString] = fn.apply(this, args);
        }
        return cache[argsToString];
    }
}

const add = memoize((a, b, c) => a + b + c);
add(1, 2, 3);
add(1, 2, 3); // it is picked from cache

const fact = memoize((x) => {
    if (x == 0) {
        return 1;
    }
    return x*fact(x - 1);
});
console.log(fact(5));
console.log(fact(6));