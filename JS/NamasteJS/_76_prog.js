// What will be the output of the below code??

// It has some objects scene

let x = {}
x[1] = 'success'; // when square notaion is key passed to it gets stringified
x["1"] = 'patience';
console.log(x);

// a yet another good example
let a = {};
let b = {key: 'b'};
let c = {key: 'c'};

a[b] = 20; a[c] = 40;
console.log(a);