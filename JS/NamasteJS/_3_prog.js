// Possible ways to create an object in js
const object1 = new Object(); // Not recomended
console.log("object1", object1);

// object create method
const object2 = Object.create(null);
console.log("object2", object2);


// object literal method
const object3 = {};
console.log("object3", object3);

function Person(name, age) {
    this.name = name; this.age = age;
}

const object4 = new Person("Vaishnav", 22)
console.log("object4", object4);

// ES6 classes are functions under the hood
class Person1{
    constructor(name, age) {
        this.name = name; this.age = age;
    }
}

const object5 = new Person1("Vaishnav", 22);
console.log("object5", object5);

// this is nice singleton pattern only one instance will be created
const object6 = new function(name = "Vaishnav", age = 22) {
    this.name = name;
    this.age = age;
}
console.log("object6", object6);
