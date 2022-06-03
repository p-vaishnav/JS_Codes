// promise chaining

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(10), 4000);
}).then((value) => {
    console.log(value);
    return value*2; // internally it creates the new Promise
}).then((value) => {
    console.log(value);
    return value*3;
}).then((value) => {
    console.log(value);
});