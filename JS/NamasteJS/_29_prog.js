// Inheritance in JS

// for in loop over object, check wether it is inhereted or not

// https://javascript.info/prototype-inheritance

const animal = {
    eat: true
}

const rabbit = {
    jump: true,
    __proto__: animal
}

// returns an array
console.log(Object.keys(rabbit));

console.log(rabbit.hasOwnProperty('jump'));
console.log(rabbit.hasOwnProperty('eat'));

// for loop inherits of attached as well as inherited properties
for(let prop in rabbit) {
    const isInherited = rabbit.hasOwnProperty(prop);
    if(isInherited) {
        console.log(`Own Property: ${prop}`);
    } else {
        console.log(`Inherited Property: ${prop}`);
    }
}