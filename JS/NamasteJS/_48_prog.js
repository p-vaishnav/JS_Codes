// behavior of this is different in regular and arrow functions
// value of this majorly depends on object which invokes the method


function myFunction() {
    console.log(this);
}
myFunction();

const myObject = {
    myFunction() {
        console.log(this);
    },
    key: 'patience'
};
myObject.myFunction();

// indirect invocation
myFunction.apply(myObject);
myFunction.call(myObject);

// lets check behavior of this for arrow function
console.log('------------------------------Arrow Function----------------------------------');

const myArrowFunction = () => {
    console.log(this);
}

// it will print global object
myArrowFunction();

// below one prints global this object
myArrowFunction.apply(myObject);
myArrowFunction.call(myObject);

// bookish: arrow function has no defined execution context of its own, instead it resolves lexically

// whatever object may call an arrow function this will be picked from outer scope