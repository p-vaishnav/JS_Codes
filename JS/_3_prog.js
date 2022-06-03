const Car = class {
    constructor(name) {
        this.name = name;
    }

    whichCar() {
        console.log(`Name of Car: ${this.name}`);
    }
}

new Car('Creta').whichCar();