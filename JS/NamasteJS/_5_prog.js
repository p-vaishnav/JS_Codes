// What are pure functions in js?

// it is a pure function as nothing outside its scope is changed aka no side effects are caused
var fun = function(a, b) {
    return a + b;
}

//---------------------------------------------------------------------

// state is not getting updated from fun2 if using arrow function
var count1 = {state: 0, setCount: (count) => {
    this.state = count 
}}

// state is getting update from fun2 if using normal function
var count2 = {state: 0, setCount: function(count) {
    this.state = count;
}};

var fun2 = function(a) {
    count1.setCount(a);
    count2.setCount(a);
}

fun2(10);

console.log(count1.state); // log's 0
console.log(count2.state); // log's 10

// Question, when using normal function I can update state (property) using 'this' but not able to do it via arrow function.
// reason being 'this' key word is resolved lexically, and does n't depend on the caller of the function