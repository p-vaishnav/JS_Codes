// by far the best example that I have read about JS

// applying pipes with reduce function

const inc = (val) => val + 1;
const dec = (val) => val - 1;
const dbl = (val) => val * 2;

const operations = [inc, inc, dec, dec, dbl];

console.log(operations.reduce((val, fn) => fn(val), 10));