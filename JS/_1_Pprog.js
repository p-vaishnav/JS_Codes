class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    details() {
        console.log(`Details, name: ${this.name}, age: ${this.age}`)
    }
}

let rahul = new Person('rahul', 22);
rahul.details();