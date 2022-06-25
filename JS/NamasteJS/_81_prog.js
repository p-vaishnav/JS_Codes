// object destructuring in a much good way

const person = {
    name: 'Vaishnav',
    age: 22,
    address: {
        street: 'QTMI quarters',
        area: 'Aundh',
        residence: 'The Landmark apartment'
    }
};

const {name, age} = person;
console.log(name, age);

// changing name while destructuring

// what if name and age has already been declared in the script
const {name: myName, age: myAge} = person;
console.log(myName, myAge);

// destructuring nested object
const {address: {street, area, residence}} = person;
console.log(street, area, residence);