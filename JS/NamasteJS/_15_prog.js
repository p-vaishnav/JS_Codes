// what is Object.freeze?

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

// this is amazing

const person = {
    name: 'Vaishnav',
    designation: 'FrontEnd Engineer'
}

Object.freeze(person);

// fails silently
person.name = 'Rohan';
person.designation = 'Store Manager';

console.log(person);

// lets fail it abruptly i.e make it throw a TypeError
function freeze() {
    'use strict';
    const person = {
        name: 'Vaishnav',
        designation: 'FrontEnd Engineer'
    }

    Object.freeze(person);

    // fails loudly
    person.name = 'Rohan'; // TypeError: cannot assign to a read only property
    person.designation = 'Store Manager';
}

// freeze();

// arrays can also be frozen
const arr = ['Excellence', 'Patience', 'Discipline'];

Object.freeze(arr);

// assignments fails silently
arr[0] = 'Procastination';

console.log(arr);

function freezeArray() {
    'use strict'
    const arr = ['Excellence', 'Patience', 'Discipline'];

    Object.freeze(arr);

    // assignments fails loudly
    arr[0] = 'Procastination';

    console.log(arr);
}
// freezeArray();

// freezing is shallow

const car = {
    name: 'Creta',
    models: {
        asta: '700',
        sportz: '900'
    }
}

Object.freeze(car);

// it works but should not work
car.models.asta = '1000';

console.log(car);


// TODO: deepFreeze should be done refer the article above