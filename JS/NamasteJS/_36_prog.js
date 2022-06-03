// inheritance behind the scenes

// TODO:
// acces parent functions with this

function display(content) {
    console.log(content);
}

class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eat() {
        return `${this.name} is eating`;
    }

    health() {
        return `${this.name} weighs ${this.weight}`;
    }
}

class Lion extends Animal {
    constructor(name, weight) {
        // super(name, weight); it produces an error
        super(name, weight);
    }

    climb() {
        return `${this.name} is climbing trees`;
    }

    status() {
        return `${this.health()}`;
        // confusion in below
        //return `${super.health()}`;
    }
}

const simba = new Lion('Simba', 140);

display(simba.climb());
display(simba.status());
display(simba.eat());
display(simba.health());



// how the above code is implemented via function

/*
function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

Animal.prototype.eat = function() {
    return `${this.name} is eating`;
}

Animal.prototype.health = function() {
    return `${this.name} weighs ${this.weight}`;
}

function Lion(name, weight) {
    Animal.call(this, name, weight);
}

// Lion.prototype = Object.create(Animal.prototype);
// OR
Object.setPrototypeOf(Lion.prototype, Animal.prototype);

Lion.prototype.climb = function() {
    return `${this.name} is climbing trees`;
}

Lion.prototype.status = function() {
    return `${this.health()}`;
}

const simba = new Lion('Simba', 140);

display(simba.climb());
display(simba.status());
display(simba.eat());
display(simba.health());
*/