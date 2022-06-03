// function definition vs function expression

// regular function vs arrow function

function greet1(name) {
    return `Hello ${name}`;
}
greet1('vaishnav');

const greet2 = function(name) {
    return `Hello ${name}`;
}
greet2('vaishnav');

const greet3 = (name) => {
    return `Hello ${name}`;
}
greet3('vaishnav');