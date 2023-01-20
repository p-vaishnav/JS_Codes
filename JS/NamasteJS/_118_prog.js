// a very good question, by using for...in loop we can iterate over
// inherited properties
// then why it does not iterate over object's properties

// reson being its not iterable as its all properties "enumerable" is set to false

const animal = {
    eats: true
};

const rabbit = {
    jumps: true,
    __proto__: animal
};

for (let prop in rabbit) {
    const isOwn = rabbit.hasOwnProperty(prop);
    if (isOwn) {
        console.log(`Own Property: ${prop}`);
    } else {
        console.log(`Inherited Property: ${prop}`);
    }
};

// Inheritance Chain
// rabbit (__proto__) -> animal (__proto__) -> Object

