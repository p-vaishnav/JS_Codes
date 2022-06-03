// Promises in JavaScript

// promise links producing code to consuming code

// Promise is a special JS object

/*
new Promise(function(resolve, reject) {
    // function is here the executor, here only our logic of code should be passed
    
    // resolve and reject are the call backs passed in our promise via js engine

    // a promise generally reolves in these states pending | fulfiled | resolved
})

*/

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('Success');
    }, 1000);
});

// below is the wrong syntax
/*
promise()
    .then(val => console.log(val));
*/

promise.then((val) => {
    console.log(val);
});
console.log('Never expect anything from anyone');

// code 2: then accepts two callbacks one for fulfilled and another for rejected && finally block which will execute no matter what
promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject(new Error('Focusing much on result'));
    }, 1000);
});
promise.then(
    (val) => {
        console.log(val);
    },
    (err) => {
        console.log(err);
    }
).finally(() => {
    console.log('In finally block');
})
