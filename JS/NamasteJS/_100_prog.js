// some more testing on template string literal

const callHistory = [];
function tag(strings, ...values) {
    callHistory.push(strings);

    // a newly fresh object is returned whenever it is called
    return {};
}

function evalueateLiteral() {
    return tag`Hello ${'world'}!`;
}

// execute evaluateLiteral
console.log(evalueateLiteral() === evalueateLiteral());
// needs to dig a bit depper here
// mentioned in documentation that same string array is passed to the tag function
console.log(callHistory[0] === callHistory[1]);