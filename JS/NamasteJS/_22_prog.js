// What are closures in JS?

// A closure is a combinations of functions bundled together with references to the surrounding lexical environment.

// In another words closure gives you access to the outer scope from the inner scope of the function

// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36

function getSecret(secret) {
    return () => secret;
}

const quality = getSecret('Patience');

console.log(quality());

const add = (a, b) => a + b;

const partialApply = (fn, ...fixedParameters) => {
    return function(...restParameters) {
        return fn.apply(this, fixedParameters.concat(restParameters));
    }
}

console.log(partialApply(add, 10)(5));


function outer() {
    let a  = 'success';

    function inner() {
        console.log(a);
    }
    inner();
}
outer();