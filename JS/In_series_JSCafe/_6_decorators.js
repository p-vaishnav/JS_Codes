// decorators in js

// modifying logger
const logger = message => console.log(message);

function loggerDecorator(logger) {
    return function(message) {
        logger.call(this, message);
        console.log('message loaded at: ', new Date().toLocaleString());
    }
}

const decoratedLogger = loggerDecorator(logger);

const _str = 'Learn from your mistakes, be in the present and build a great future';
logger(_str);
decoratedLogger(_str);

// validate multiply
const Multiply = (...args) => {
    return args.reduce((a, b) => a * b);
}

function Validator(fn) {
    return (...args) => {
        const validArgs = args.every((n) => Number.isInteger(n));
        if (!validArgs) {
            throw new TypeError('Argumnent should not be of type integer');
        }
        return fn(...args);
    }
}

const decoratedMultiply = Validator(Multiply);
console.log(decoratedMultiply(4,5,6));
