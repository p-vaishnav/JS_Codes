class EmptyConstructor {}
console.log(EmptyConstructor.prototype.constructor)

class FiniteConstructor {
    constructor() {
        this.something = "Hey!!"
    }
}
console.log(FiniteConstructor.prototype.constructor);

class CheckInPrototype {
    constructor() {
        this.something = "Hey!!"
    }
    greet() {
        console.log('greet!!');
    }
}
console.log(CheckInPrototype.prototype);

/*
Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".

That’s good, because if we for..in over an object, we usually don’t want its class methods.

Classes always use strict. All code inside the class construct is automatically in strict mode.
*/