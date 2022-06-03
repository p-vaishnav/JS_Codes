'use strict'
function myFunction() {
    console.log(this);
    //return global object of this
}
myFunction();

const myObject = {
    printThis() {
        console.log(this);
    }
};
myObject.printThis();

const myPerson = {name: "vaishnav"};
myObject.printThis.call(myPerson);
myObject.printThis.apply(myPerson);

console.log("------------------------------------------");

const myObject1 = {
    myMethod(items) {
        console.log(this);
        const callback = () => {
            console.log(this);
        }
        callback(items);
    }
}
myObject1.myMethod([1,2,3,4]);

console.log("-------------------------------------------");
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const vaishnav = new Person("vaishnav", 21);
console.log(vaishnav);

/*
const Car = (brand) => {
    this.brand = brand;
}
const creta = new Car('Hyundai');
// this throws an error
*/

console.log("-------------------------------------------");
function fun() {
    const callback = () => {
        console.log(arguments);
    }
    callback(3,4);
}
fun(1,2);
console.log("---------------------------------------------");
console.log("Loosing this use case");

class Company {
    constructor(cmpName) {
        this.cmpName  = cmpName;
    }
    logName() {
        console.log(this.cmpName);
    }
}
const ptc = new Company('Parametric Technology Corporation');
setTimeout(ptc.logName, 2000); // this is not preserved can be preseved with call and apply
setTimeout(ptc.logName.bind(ptc),3000); // a work around to handle it

console.log("-----------------------------------------------");
class Person_ {
    constructor(person) {
        this.person  = person;
    }
    logName = () => {
        console.log(this.person);
    }
}
const p1 = new Person_("vaishnav");
setTimeout(p1.logName, 4000);

